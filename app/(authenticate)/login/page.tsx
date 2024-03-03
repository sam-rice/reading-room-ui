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
    if (key === "Enter") handleSubmit(onSubmit)
  }

  const onSubmit: SubmitHandler<ILoginFields> = async (data) => {
    try {
      const response = await loginUser(data.email, data.password)
      if ("error" in response) {
        setAuthError("Invalid email or password.")
      } else {
        router.push("/shelves")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="flex w-1/3 flex-col items-center mt-6 pt-4 pb-3 justify-evenly bg-white">
        <div className="relative mt-4 mb-2 text-center w-full">
          <div className="text-xl">Log in</div>
          <div className="text-sm">
            or{" "}
            <Link className="underline" href="register">
              sign up
            </Link>
          </div>
          {authError && <div className="absolute -bottom-7 text-red-500 ml-auto mr-auto left-0 right-0">{authError}</div>}
        </div>
        <Input
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
        />
        <Input
          className="w-4/5"
          label="password"
          type="password"
          autoComplete="current-password"
          onKeyDown={onKeyDown}
          register={register}
          registerOptions={{ required: "required" }}
          error={errors.password}
        />
      </div>
      <Button className="my-6" onClick={handleSubmit(onSubmit)}>
        continue
      </Button>
    </>
  )
}

export default LoginPage
