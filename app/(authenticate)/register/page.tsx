"use client"

import { registerUser } from "@/actions/authorization"
import Button from "@/components/Button"
import Input from "@/components/Input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

interface IRegisterFields {
  "first name": string
  "last name": string
  email: string
  password: string
}

const RegisterPage: FC = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFields>({
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const [authError, setAuthError] = useState<string | null>(null)

  const onKeyDown = (key: string) => {
    if (key === "Enter") handleSubmit(onSubmit)()
  }

  const onSubmit: SubmitHandler<IRegisterFields> = async (data) => {
    try {
      const response = await registerUser(
        data["first name"],
        data["last name"],
        data.email,
        data.password,
      )
      if ("error" in response) {
        setAuthError("Invalid details.")
      } else {
        router.push("/shelves")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="mt-6 flex w-1/3 flex-col items-center justify-evenly bg-white pb-7 pt-4">
        <div className="relative mb-6 w-full text-center">
          <div className="text-xl">Sign up</div>
          <div className="text-sm">
            already signed up?{" "}
            <Link className="underline" href="/login">
              log in
            </Link>
          </div>
          {authError && (
            <div className="absolute -bottom-7 left-0 right-0 ml-auto mr-auto text-red-500">
              {authError}
            </div>
          )}
        </div>
        <Input
          id="first-name"
          className="w-4/5"
          label="first name"
          autoComplete="given-name"
          onKeyDown={onKeyDown}
          register={register}
          registerOptions={{
            required: "required",
            maxLength: 30 || "30 characters max",
          }}
          error={errors["first name"]}
          required
        />
        <Input
          id="last-name"
          className="w-4/5"
          label="last name"
          autoComplete="family-name"
          onKeyDown={onKeyDown}
          register={register}
          registerOptions={{
            required: "required",
            maxLength: 30 || "30 characters max",
          }}
          error={errors["last name"]}
          required
        />
        <Input
          id="email"
          className="w-4/5"
          label="email"
          type="email"
          autoComplete="email"
          onKeyDown={onKeyDown}
          register={register}
          registerOptions={{
            required: "required",
            maxLength: 40 || "40 characters max",
            validate: (value) => value.includes("@") || "Invalid email format.",
          }}
          error={errors.email}
          required
        />
        <Input
          id="password"
          className="mb-5 w-4/5"
          label="password"
          type="password"
          autoComplete="new-password"
          onKeyDown={onKeyDown}
          register={register}
          registerOptions={{ required: "required" }}
          error={errors.password}
          required
        />
      </div>
      <Button className="my-6" onClick={handleSubmit(onSubmit)}>
        continue
      </Button>
    </>
  )
}

export default RegisterPage
