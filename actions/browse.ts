"use server"

import { EntityType } from "@/interfaces/utilities"
import { API_BASE_URL } from "@/utilities/constants"
import { cookies } from "next/headers"

export const getEntityDetails = async<T> (libraryKey: string, type: EntityType): Promise<T> => {
  try {
    const authToken = cookies().get("token")?.value
    const response = await fetch(`${API_BASE_URL}/search/${type}/${libraryKey}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    if (response.status !== 200) {
      throw new Error()
    }
    return response.json()
  } catch (error) {
    throw new Error(`Failed to find ${type === "books" ? "book" : "author"} details.`)
  }
}

export const getSearchResults = async<T> (query: string, type: EntityType): Promise<T[]> => {
  try {
    const authToken = cookies().get("token")?.value
    const response = await fetch(`${API_BASE_URL}/search/${type}?q=${query}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    if (response.status !== 200) {
      throw new Error()
    }
    return response.json()
  } catch (error) {
    throw new Error(`Failed to search for ${type}.`)
  }
}