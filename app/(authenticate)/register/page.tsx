"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Link from "next/link"
import { FC, useState } from "react"

const RegisterPage: FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onKeyDown = (key: string) => {
    if (key === "Enter") submit()
  }

  const submit = () => {
    console.log(`log in with email: ${email} and password: ${password}`)
  }

  return (
    <>
      <br />
      <div className="flex w-1/3 flex-col items-center justify-evenly bg-white">
        <div className="my-4 text-center">
          <div className="text-xl">Sign up</div>
          <div className="text-sm">
            already signed up?{" "}
            <Link className="underline" href="/login">
              log in
            </Link>
          </div>
        </div>
        <Input
          className="mb-4 w-4/5"
          value={email}
          name="email-login"
          type="email"
          label="email"
          onChange={setEmail}
          onKeyDown={onKeyDown}
        />
        <Input
          className="mb-5 w-4/5"
          value={password}
          name="password-login"
          label="password"
          onChange={setPassword}
          onKeyDown={onKeyDown}
        />
      </div>
      <Button className="mt-6" onClick={submit}>
        continue
      </Button>
    </>
  )
}

export default RegisterPage
