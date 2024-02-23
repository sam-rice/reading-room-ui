"use client"

import { Search } from "@mui/icons-material"
import { Children, FC, ReactNode, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Input } from "./Input"
import Pager from "./Pager"

interface PageableListProps {
  outerClassName?: string
  listClassName?: string
  children: ReactNode
  headingNode?: ReactNode
  itemsPerPage: number
  includeFilter?: boolean
}

const PageableList: FC<PageableListProps> = ({
  outerClassName,
  listClassName,
  children,
  headingNode,
  itemsPerPage,
  includeFilter = false,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filterValue, setFilterValue] = useState("")
  const sectionRef = useRef<HTMLElement>(null)

  const allChildren = Children.toArray(children)
  const totalItems = allChildren.length
  const numberOfPages = Math.ceil(totalItems / itemsPerPage)

  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage

  const currentPageItems = allChildren.slice(firstItemIndex, lastItemIndex)

  const scrollToSection = () => sectionRef.current?.scrollIntoView()

  const onFilterKeyDown = (key: string) => {
    if (key === "Enter") filterBooks()
  }

  const filterBooks = () => {
    console.log(`filtering books based on query: ${filterValue}`, "children here: ", allChildren)
  }

  const pageForward = () => {
    setCurrentPage(currentPage + 1)
    scrollToSection()
  }

  const pageBackward = () => {
    setCurrentPage(currentPage - 1)
    scrollToSection()
  }

  return (
    <section
      className={twMerge("flex grow flex-col", outerClassName)}
      ref={sectionRef}
    >
      {includeFilter && (
        <div className="relative mt-3 w-72">
          <Input
            value={filterValue}
            name="search-shelf"
            label="Search shelf"
            onChange={setFilterValue}
            onKeyDown={onFilterKeyDown}
          />
          <button
            className="absolute right-[7px] top-[33px]"
            onClick={filterBooks}
          >
            <Search className="hover:text-theme-gray-500 text-theme-gray-400 transition-colors" />
          </button>
        </div>
      )}
      {headingNode}
      <div className="text-right mb-3">
        showing {firstItemIndex + 1} -{" "}
        {firstItemIndex + currentPageItems.length} of {totalItems}
      </div>
      <ul
        className={twMerge("mb-6 grid grow grid-cols-2 gap-6", listClassName)}
      >
        {currentPageItems}
      </ul>
      <Pager
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        totalItems={totalItems}
        pageForward={pageForward}
        pageBackward={pageBackward}
      />
    </section>
  )
}

export default PageableList
