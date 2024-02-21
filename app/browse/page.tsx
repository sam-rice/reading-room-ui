"use client"

import { Button } from "@/components/Button"
import PageContainer from "@/components/PageContainer"
import { FC, useState } from "react"

type SearchCategory = "authors" | "books"

const BrowsePage: FC = () => {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<SearchCategory | "">("")

  const submit = () => console.log("submitting")

  return (
    <PageContainer className=" items-center justify-center">
      <h1 id="search-library">SEARCH LIBRARY</h1>
      <div className="flex h-80 w-full flex-col items-center justify-center space-y-5 bg-theme-beige-400">
        <input
          className="h-11 w-2/5 min-w-64 pl-3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-labelledby="search-library"
          placeholder="search..."
        />
        <label className="flex h-14 w-1/3 min-w-56 items-center justify-center bg-white">
          search by:
          <select
            className="ml-3 border"
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
