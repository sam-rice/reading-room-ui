"use client"

import { Search } from "@mui/icons-material"
import { FC, KeyboardEvent, useState } from "react"



const HeaderSearch: FC = () => {
  const [query, setQuery] = useState("")

  const executeSearch = () => console.log("search for ", query)

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") executeSearch()
  }

  return (
    <span className="relative h-1/2 w-4/5">
      <button
        className="absolute right-[7px] top-[9px]"
        onClick={() => executeSearch()}
      >
        <Search className="text-theme-gray-400 hover:text-theme-gray-500 transition-colors" />
      </button>
      <input
        className="rounded-theme-small h-full w-full pl-3"
        value={query}
        placeholder="Search books"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </span>
  )
}

export default HeaderSearch