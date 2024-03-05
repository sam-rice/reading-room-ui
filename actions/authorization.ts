"use server"

import { ISuccessfulAuthResponse } from "@/interfaces/persistenceDtos"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export const logout = async () => {
  cookies().delete("token")
  redirect("/login")
}

export const loginUser = async (email: string, password: string) => {
  const endpoint = "/users/login"
  return authorizationFetchWrapper(
    endpoint,
    { email, password },
    "Failed to log in user.",
  )
}

export const registerUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) => {
  const endpoint = "/users/register"
  return authorizationFetchWrapper(
    endpoint,
    { firstName, lastName, email, password },
    "Failed to register new user.",
  )
}

const authorizationFetchWrapper = async (
  endpoint: string,
  body: Object,
  errorMessage: string,
): Promise<ISuccessfulAuthResponse | { error: string }> => {
  try {
    const response = await fetch(process.env.API_BASE_URL + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    })
    if (response.status === 401) {
      return { error: "Invalid details." }
    } else if (response.status !== 200) {
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
    throw new Error(errorMessage)
  }
}
