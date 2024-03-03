"use client"

import Button from "@/components/Button"
import PageContainer from "@/components/PageContainer"
import { DM_Serif_Display } from "next/font/google"
import { useRouter } from "next/navigation"
import { FC, useState } from "react"
import { twMerge } from "tailwind-merge"

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

export type SearchCategory = "authors" | "books"

const SearchFormPage: FC = () => {
  const [query, setQuery] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [category, setCategory] = useState<SearchCategory>("books")
  const router = useRouter()

  const submit = () => {
    if (query) {
      router.push(`?q=${query}&cat=${category}`)
    } else {
      setError("search term required")
    }
  }

  const handleKeyDown = (key: string) => {
    if (key === "Enter") submit()
  }

  return (
    <PageContainer className=" items-center justify-center">
      <h1
        className={twMerge(dmSerifDisplay.className, "mb-10 text-4xl")}
        id="search-library"
      >
        BROWSE LIBRARY
      </h1>
      <div className="relative flex h-72 w-full flex-col items-center justify-center space-y-7 bg-theme-beige-400 rounded-theme-large">
        <input
          className="mt-3 h-11 w-1/2 min-w-64 pl-3 rounded-theme-small"
          value={query}
          id="search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e.key)}
          aria-labelledby="search-library"
          placeholder="search..."
          required
          aria-label="search terms"
        />
        <label className="flex h-16 w-1/3 min-w-56 items-center justify-center bg-white">
          search by:
          <select
            className="border-theme-gray-400 ml-5 h-9 w-1/2 min-w-32 rounded-theme-small border"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as SearchCategory)}
          >
            <option value="books">book title</option>
            <option value="authors">author name</option>
          </select>
        </label>
        <Button onClick={submit}>search</Button>
        {error && (
          <span className="text-red-500 absolute bottom-2">* {error}</span>
        )}
      </div>
    </PageContainer>
  )
}

export default SearchFormPage
