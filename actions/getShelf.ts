"use server"

import { API_BASE_URL } from "@/utilities/constants"
import { cookies } from "next/headers"

const getShelf = async (shelfId: number) => {
  const authToken = cookies().get("token")?.value
  const response = await fetch(`${API_BASE_URL}/shelves/${shelfId}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
  return response.json()
}

export default getShelf
