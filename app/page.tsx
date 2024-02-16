"use client"

import { FC, useState } from "react"
import { DM_Serif_Display } from "next/font/google"
import { twMerge } from "tailwind-merge"
import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

export const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
})

const Home: FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onKeyDown = (key: string) => {
    if (key === "Enter") submit()
  }

  const submit = () => {
    console.log(`log in with email: ${email} and password: ${password}`)
  }

  return (
    <main className="flex w-full max-w-6xl flex-1 flex-col items-center justify-center">
      <h1 className={twMerge(dmSerifDisplay.className, "mb-14 text-5xl")}>
        READING ROOM
      </h1>
      <div className="bg-theme-beige-400 rounded-theme-large flex h-96 w-full flex-col items-center justify-center">
        <br />
        <div className="flex w-1/3 flex-col items-center justify-evenly bg-white">
          <span className="my-4 text-lg">Sign in</span>
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
            className="mb-4 w-4/5"
            value={password}
            name="password-login"
            label="password"
            onChange={setPassword}
            onKeyDown={onKeyDown}
          />
        </div>
        <Button className="mt-6" onClick={submit}>
          submit
        </Button>
      </div>
    </main>
  )
}

export default Home
