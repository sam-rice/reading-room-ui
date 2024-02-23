"use server"

import { cookies } from "next/headers"

const isActiveSession = async () => {
  return cookies().has("token")
}

export default isActiveSession
