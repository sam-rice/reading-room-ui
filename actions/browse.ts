"use server"

import { IBookDetails, IBookSearchResult } from "@/interfaces/browseDtos"
import { SearchCategory } from "@/interfaces/utilities"
import { API_BASE_URL } from "@/utilities/constants"
import { cookies } from "next/headers"

export const getBookDetails = async (libraryKey: string): Promise<IBookDetails> => {
  try {
    const authToken = cookies().get("token")?.value
    const response = await fetch(`${API_BASE_URL}/search/books/${libraryKey}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    if (response.status !== 200) {
      throw new Error()
    }
    return response.json()
  } catch (error) {
    throw new Error("Failed to find book details.")
  }
}

export const getSearchResults = async<T> (query: string, category: SearchCategory): Promise<T[]> => {
  try {
    const authToken = cookies().get("token")?.value
    const response = await fetch(`${API_BASE_URL}/search/${category}?q=${query}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    if (response.status !== 200) {
      throw new Error()
    }
    return response.json()
  } catch (error) {
    throw new Error(`Failed to search for ${category}.`)
  }
}