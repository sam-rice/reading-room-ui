"use server"

import { API_BASE_URL, SEARCH_RESULTS_PAGE_SIZE } from "@/utilities/constants"
import { fetchWrapper } from "./utilities"

export type EntityType = "books" | "authors"

export const getEntityDetails = async <T>(
  libraryKey: string,
  type: EntityType,
) => {
  const endpoint = `${API_BASE_URL}/search/${type}/${libraryKey}`
  return fetchWrapper<T>(
    "GET",
    endpoint,
    200,
    `Failed to get ${type === "books" ? "book" : "author"} details.`,
  )
}

export const getSearchResults = async <T>(query: string, type: EntityType, pageNum: number) => {
  const endpoint = `${API_BASE_URL}/search/${type}?q=${query}&size=${SEARCH_RESULTS_PAGE_SIZE}&page=${pageNum ? pageNum : 1}`
  return fetchWrapper<T>(
    "GET",
    endpoint,
    200,
    `Failed to get results for "${query}" in "${type}".`,
  )
}
