"use client"

import { Search } from "@mui/icons-material"
import { useRouter } from "next/navigation"
import { FC, KeyboardEvent, useState } from "react"

const HeaderSearch: FC = () => {
  const router = useRouter()
  const [query, setQuery] = useState("")

  const submitSearch = () => {
    if (!query) {
      router.push("/browse")
    } else {
      router.push(`/browse?q=${query}&cat=books&page=1`)
      setQuery("")
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submitSearch()
  }

  return (
    <span className="relative h-1/2 w-4/5">
      <button
        className="absolute right-[7px] top-[9px]"
        onClick={() => submitSearch()}
        aria-label="submit search"
      >
        <Search className="text-theme-gray-400 transition-colors hover:text-theme-gray-500" />
      </button>
      <input
        className="h-full w-full rounded-theme-small pl-3"
        value={query}
        placeholder="Search books"
        id="search-books"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="search books"
      />
    </span>
  )
}

export default HeaderSearch
