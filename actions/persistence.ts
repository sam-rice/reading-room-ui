"use server"

import {
  ISavedBook,
  IShelfBasic,
  IShelfDetails,
  IUpdateOrDeleteEntityResponse,
} from "@/interfaces/persistenceDtos"
import { API_BASE_URL } from "@/utilities/constants"
import { fetchWrapper } from "./utilities"

export const getShelf = async (shelfId: number) => {
  const endpoint = `${API_BASE_URL}/shelves/${shelfId}`
  return fetchWrapper<IShelfDetails>(
    "GET",
    endpoint,
    200,
    "Failed to get shelf details.",
  )
}

export const getAllShelves = async () => {
  const endpoint = `${API_BASE_URL}/shelves`
  return fetchWrapper<IShelfBasic[]>(
    "GET",
    endpoint,
    200,
    "Failed to get all shelves.",
  )
}

export const createNewShelf = async (
  title: string,
  description: string,
) => {
  const endpoint = `${API_BASE_URL}/shelves`
  return fetchWrapper<IShelfBasic>(
    "POST",
    endpoint,
    201,
    "Failed to create shelf.",
    "/shelves",
    { title, description },
  )
}

export const deleteShelf = async (
  shelfId: number,
) => {
  const endpoint = `${API_BASE_URL}/shelves/${shelfId}`
  return fetchWrapper<IUpdateOrDeleteEntityResponse>(
    "DELETE",
    endpoint,
    200,
    "Failed to delete shelf.",
    "/shelves",
  )
}

export const updateShelf = async (
  shelfId: number,
  title: string,
  description: string,
) => {
  const endpoint = `${API_BASE_URL}/shelves/${shelfId}`
  return fetchWrapper<IUpdateOrDeleteEntityResponse>(
    "PUT",
    endpoint,
    200,
    "Failed to update shelf description",
    `/shelves/${shelfId}`,
    { title, description },
  )
}

export const updateBook = async (
  shelfId: number,
  bookId: number,
  userNote: string,
) => {
  const endpoint = `${API_BASE_URL}/shelves/${shelfId}/books/${bookId}`
  return fetchWrapper<IUpdateOrDeleteEntityResponse>(
    "PUT",
    endpoint,
    200,
    "Failed to update user note.",
    `/shelves/${shelfId}`,
    { userNote },
  )
}

export const deleteBookFromShelf = async (
  shelfId: number,
  bookId: number,
) => {
  const endpoint = `${API_BASE_URL}/shelves/${shelfId}/books/${bookId}`
  return fetchWrapper<IUpdateOrDeleteEntityResponse>(
    "DELETE",
    endpoint,
    200,
    "Failed to delete book from shelf.",
    `/shelves/${shelfId}`,
  )
}

export const addBookToShelf = async (
  shelfId: number,
  libraryKey: string,
) => {
  const endpoint = `${API_BASE_URL}/shelves/${shelfId}/books`
  return fetchWrapper<ISavedBook>(
    "POST",
    endpoint,
    201,
    "Failed to add book to shelf.",
    "/shelves",
    { libraryKey },
  )
}
