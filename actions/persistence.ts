"use server"

import {
  IUpdateOrDeleteEntityResponse,
  ISavedBook,
  IShelfBasic,
  IShelfDetails,
} from "@/interfaces/persistenceDtos"
import { API_BASE_URL } from "@/utilities/constants"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export const getShelf = async (shelfId: number): Promise<IShelfDetails> => {
  try {
    const authToken = cookies().get("token")?.value
    const response = await fetch(`${API_BASE_URL}/shelves/${shelfId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    if (response.status !== 200) {
      throw new Error()
    }
    return response.json()
  } catch (error) {
    throw new Error("Failed to get shelf details.")
  }
}

export const getAllShelves = async (): Promise<IShelfBasic[]> => {
  try {
    const authToken = cookies().get("token")?.value
    const response = await fetch(`${API_BASE_URL}/shelves`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    if (response.status !== 200) {
      throw new Error()
    }
    return response.json()
  } catch (error) {
    throw new Error("Failed to get all shelves.")
  }
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
): Promise<IUpdateOrDeleteEntityResponse> => {
  try {
    const authToken = cookies().get("token")?.value
    const response = await fetch(`${API_BASE_URL}/shelves/${shelfId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    if (response.status !== 200) {
      throw new Error()
    }
    revalidatePath("/shelves")
    return response.json()
  } catch (error) {
    throw new Error("Failed to delete shelf.")
  }
}

export const updateShelf = async (shelfId: number, title: string, description: string): Promise<IUpdateOrDeleteEntityResponse> => {
  try {
    const authToken = cookies().get("token")?.value
    const response = await fetch(`${API_BASE_URL}/shelves/${shelfId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ title, description }),
    })
    if (response.status !== 200) {
      throw new Error()
    }
    revalidatePath(`/shelves/${shelfId}`)
    return response.json()
  } catch (error) {
    throw new Error("Failed to update shelf description.")
  }
}

export const deleteBookFromShelf = async (
  shelfId: number,
  bookId: number,
): Promise<IUpdateOrDeleteEntityResponse> => {
  try {
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
    if (response.status !== 200) {
      throw new Error()
    }
    revalidatePath(`/shelves/${shelfId}`)
    return response.json()
  } catch (error) {
    throw new Error("Failed to delete book from shelf.")
  }
}

export const addBookToShelf = async (shelfId: number, libraryKey: string): Promise<ISavedBook> => {
  try {
    const authToken = cookies().get("token")?.value
    const response = await fetch(`${API_BASE_URL}/shelves/${shelfId}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ libraryKey }),
    })
    if (response.status !== 201) {
      throw new Error()
    }
    revalidatePath("/shelves")
    return response.json()
  } catch (error) {
    throw new Error("Failed to add book to shelf.")
  }
}

export const updateBook = async (shelfId: number, bookId: number, userNote: string): Promise<IUpdateOrDeleteEntityResponse> => {
  try {
    const authToken = cookies().get("token")?.value
    const response = await fetch(`${API_BASE_URL}/shelves/${shelfId}/books/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ userNote }),
    })
    if (response.status !== 200) {
      throw new Error()
    }
    revalidatePath(`/shelves/${shelfId}`)
    return response.json()
  } catch (error) {
    throw new Error("Failed to update user note.")
  }
}