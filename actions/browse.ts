"use server"

import { fetchWrapper } from "./utilities"

export type EntityType = "books" | "authors"

export const getEntityDetails = async <T>(
  libraryKey: string,
  type: EntityType,
) => {
  const endpoint = `/search/${type}/${libraryKey}`
  return fetchWrapper<T>(
    "GET",
    endpoint,
    200,
    `Failed to get ${type === "books" ? "book" : "author"} details.`,
  )
}
