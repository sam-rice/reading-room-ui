"use server"

import {
  IDeleteShelfResponse,
  IShelfBasic,
  IShelfDetails,
} from "@/interfaces/persistenceDtos"
import { API_BASE_URL } from "@/utilities/constants"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export const getShelf = async (shelfId: number): Promise<IShelfDetails> => {
  const authToken = cookies().get("token")?.value
  const response = await fetch(`${API_BASE_URL}/shelves/${shelfId}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
  return response.json()
}

export const getAllShelves = async (): Promise<IShelfBasic[]> => {
  const authToken = cookies().get("token")?.value
  const response = await fetch(`${API_BASE_URL}/shelves`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
  return response.json()
}

export const deleteShelf = async (
  shelfId: number,
): Promise<IDeleteShelfResponse> => {
  const authToken = cookies().get("token")?.value
  const response = await fetch(`${API_BASE_URL}/shelves/${shelfId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })
  revalidatePath("/shelves")
  return response.json()
}
