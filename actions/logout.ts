"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const logout = (): void => {
  cookies().delete("token")
  
  redirect("/login")
}

export default logout