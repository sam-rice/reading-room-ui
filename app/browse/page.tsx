"use client"

import { Button } from "@/components/Button"
import PageContainer from "@/components/PageContainer"
import { FC, useState } from "react"
import { DM_Serif_Display } from "next/font/google"
import { twMerge } from "tailwind-merge"
import { useRouter } from "next/navigation"

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

type SearchCategory = "authors" | "books"

const BrowsePage: FC = () => {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<SearchCategory | "">("")
  const router = useRouter()

  const submit = () => router.push(`q=${query}`)

  return (
    <PageContainer className=" items-center justify-center">
      <h1 className={twMerge(dmSerifDisplay.className, "mb-10 text-4xl")} id="search-library">BROWSE LIBRARY</h1>
      <div className="flex h-72 w-full flex-col items-center justify-center space-y-7 bg-theme-beige-400">
        <input
          className="h-11 w-1/2 min-w-64 pl-3 mt-3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-labelledby="search-library"
          placeholder="search..."
        />
        <label className="flex h-16 w-1/3 min-w-56 items-center justify-center bg-white">
          search by:
          <select
            className="ml-5 border h-9 border-theme-gray-400 rounded-theme-small w-1/2 min-w-32"
            value={category}
            onChange={(e) => setCategory(e.target.value as SearchCategory)}
          >
            <option value="" disabled>
              select
            </option>
            <option value="books">book title</option>
            <option value="authors">author name</option>
          </select>
        </label>
        <Button onClick={submit}>search</Button>
      </div>
    </PageContainer>
  )
}

export default BrowsePage
