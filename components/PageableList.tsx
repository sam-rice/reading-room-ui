"use client"

import { Children, FC, ReactNode, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import Pager from "./Pager"

interface PageableListProps {
  outerClassName?: string
  listClassName?: string
  children: ReactNode
  headingNode?: ReactNode
  itemsPerPage: number
}

const PageableList: FC<PageableListProps> = ({
  outerClassName,
  listClassName,
  children,
  headingNode,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const sectionRef = useRef<HTMLElement>(null)

  const allChildren = Children.toArray(children)
  const totalItems = allChildren.length
  const numberOfPages = Math.ceil(totalItems / itemsPerPage)

  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage

  const currentPageItems = allChildren.slice(firstItemIndex, lastItemIndex)

  const scrollToSection = () => sectionRef.current?.scrollIntoView()

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
      {headingNode}
      <div className="text-right mb-3">
        showing {firstItemIndex + 1} -{" "}
        {firstItemIndex + currentPageItems.length} of {totalItems}
      </div>
      <ul
        className={twMerge(
          "mb-6 grid grow grid-cols-2 gap-6 content-start",
          listClassName,
        )}
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
