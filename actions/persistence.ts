"use server"

import {
  IDeleteEntityResponse,
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

export const createNewShelf = async (
  title: string,
  description: string,
): Promise<IShelfBasic> => {
  try {
    const authToken = cookies().get("token")?.value
    const response = await fetch(`${API_BASE_URL}/shelves`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ title, description }),
    })
    if (response.status !== 201) {
      throw new Error()
    }
    revalidatePath("/shelves")
    return response.json()
  } catch (error) {
    throw new Error("Failed to create shelf.")
  }
}

export const deleteShelf = async (
  shelfId: number,
): Promise<IDeleteEntityResponse> => {
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

export const deleteBookFromShelf = async (
  shelfId: number,
  bookId: number,
): Promise<IDeleteEntityResponse> => {
  const authToken = cookies().get("token")?.value
  const response = await fetch(
    `${API_BASE_URL}/shelves/${shelfId}/books/${bookId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  )
  revalidatePath(`/shelves/${shelfId}`)
  return response.json()
}

// const getToken = () => cookies().get("token")?.value
