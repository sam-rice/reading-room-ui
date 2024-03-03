"use client"

import { loginUser } from "@/actions/authorization"
import Button from "@/components/Button"
import Input from "@/components/Input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

export interface ILoginFields {
  email: string
  password: string
}

const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginFields>({
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const router = useRouter()
  const [authError, setAuthError] = useState<string | null>(null)

  const onKeyDown = (key: string) => {
    if (key === "Enter") handleSubmit(onSubmit)()
  }

  const onSubmit: SubmitHandler<ILoginFields> = async (data) => {
    try {
      const response = await loginUser(data.email, data.password)
      if ("error" in response) {
        setAuthError("Invalid email or password.")
        reset()
      } else {
        router.push("/shelves")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="mt-6 flex w-1/3 flex-col items-center justify-evenly bg-white pb-3 pt-4">
        <div className="relative mb-2 mt-4 w-full text-center">
          <div className="text-xl">Log in</div>
          <div className="text-sm">
            or{" "}
            <Link className="underline" href="register">
              sign up
            </Link>
          </div>
          {authError && (
            <div className="absolute -bottom-7 left-0 right-0 ml-auto mr-auto text-red-500">
              {authError}
            </div>
          )}
        </div>
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
          className="w-4/5"
          label="password"
          type="password"
          autoComplete="current-password"
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

export default LoginPage
