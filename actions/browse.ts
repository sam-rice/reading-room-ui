"use server"

import { IBookDetails, IBookSearchResult } from "@/interfaces/browseDtos"
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

export const getBookSearchResults = async (query: string): Promise<IBookSearchResult[]> => {
  try {
    const authToken = cookies().get("token")?.value
    const response = await fetch(`${API_BASE_URL}/search/books?q=${query}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    if (response.status !== 200) {
      throw new Error()
    }
    return response.json()
  } catch (error) {
    throw new Error("Failed to search for books.")
  }
}