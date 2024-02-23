"use client"

import { Search } from "@mui/icons-material"
import { Dispatch, FC, SetStateAction, useState } from "react"
import { Input } from "../Input"

interface PageableListFilterProps {
  isFiltering: boolean
  clearFilter: () => void
  setQuery: Dispatch<SetStateAction<string>>
}

const PageableListFilter: FC<PageableListFilterProps> = ({
  isFiltering,
  clearFilter,
  setQuery,
}) => {
  const [filterValue, setFilterValue] = useState("")

  const onFilterKeyDown = (key: string) => {
    if (key === "Enter") filter()
  }

  const filter = () => setQuery(filterValue)

  const unfilter = () => {
    setFilterValue("")
    clearFilter()
  }

  return (
    <div className="mt-3 flex items-end">
      <div className="relative w-72 mr-4">
        <Input
          value={filterValue}
          name="search-list"
          label="Search list"
          onChange={setFilterValue}
          onKeyDown={onFilterKeyDown}
        />
        <button
          className="absolute right-[7px] top-[33px]"
          onClick={filter}
        >
          <Search className="hover:text-theme-gray-500 text-theme-gray-400 transition-colors" />
        </button>
      </div>
      {isFiltering && (
        <div>
          <span>{`filtering for "${filterValue}"`}</span>
          <button onClick={unfilter}>clear</button>
        </div>
      )}
    </div>
  )
}

export default PageableListFilter
