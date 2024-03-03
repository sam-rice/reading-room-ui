"use client"

import { login } from "@/actions/session"
import Button from "@/components/Button"
import Input from "@/components/Input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

export interface ILoginInputs {
  email: string
  password: string
}

const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const router = useRouter()

  const onKeyDown = (key: string) => {
    if (key === "Enter") handleSubmit(onSubmit)
  }

  const onSubmit: SubmitHandler<ILoginInputs> = async (data) => {
    try {
      await login(data.email, data.password)
      router.push("/shelves")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <br />
      <div className="flex w-1/3 flex-col items-center justify-evenly bg-white">
        <div className="my-4 text-center">
          <div className="text-xl">Log in</div>
          <div className="text-sm">
            or{" "}
            <Link className="underline" href="register">
              sign up
            </Link>
          </div>
        </div>
        <Input
          className="mb-4 w-4/5"
          label="email"
          type="email"
          onKeyDown={onKeyDown}
          register={register}
          registerOptions={{ required: "required" }}
          error={errors.email}
        />
        <Input
          className="mb-5 w-4/5"
          label="password"
          type="password"
          onKeyDown={onKeyDown}
          register={register}
          registerOptions={{ required: "required" }}
          error={errors.password}
        />
      </div>
      <Button className="mt-6" onClick={handleSubmit(onSubmit)}>
        continue
      </Button>
    </>
  )
}

export default LoginPage
