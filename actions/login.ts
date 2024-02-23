"use server"

import { API_BASE_URL } from "@/utilities/constants"
import { cookies } from "next/headers"

const login = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  })
  const setCookie = response.headers.getSetCookie()
  const authArray = setCookie[0].split(/[=;]/)

  cookies().set("token", authArray[1], {
    maxAge: parseInt(authArray[3]) / 10,
    httpOnly: true,
    path: "/",
  })
  
  return response.json()
}

export default login
