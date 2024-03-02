"use server"

import { API_BASE_URL } from "@/utilities/constants"
import { cookies } from "next/headers"

export const logout = async () => {
  cookies().delete("token")
}

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    })
    if (response.status !== 200) {
      throw new Error()
    }
    const setCookie = response.headers.getSetCookie()
    const authArray = setCookie[0].split(/[=;]/)
    cookies().set("token", authArray[1], {
      maxAge: parseInt(authArray[3]) / 10,
      httpOnly: true,
      path: "/",
    })
    return response.json()
  } catch (error) {
    throw new Error("Failed to log in user.")
  }
}
