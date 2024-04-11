"use client"

import { Children, FC, ReactNode, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import Pager from "./Pager"

interface PageableControlledListProps {
  outerClassName?: string
  listClassName?: string
  children: ReactNode
  headingNode?: ReactNode
  itemsPerPage: number
  noItemsMessage: string
}

const PageableControlledList: FC<PageableControlledListProps> = ({
  outerClassName,
  listClassName,
  children,
  headingNode,
  itemsPerPage,
  noItemsMessage,
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
      {!!currentPageItems.length ? (
        <div className="mb-3 text-right">
          showing {firstItemIndex + 1} -{" "}
          {firstItemIndex + currentPageItems.length} of {totalItems}
        </div>
      ) : (
        <div className="mt-10 text-center text-lg text-theme-gray-500">
          {noItemsMessage}
        </div>
      )}
      <ul
        className={twMerge(
          "mb-6 grid grow grid-cols-2 content-start gap-6",
          listClassName,
        )}
      >
        {currentPageItems}
      </ul>
      {!!currentPageItems.length && (
        <Pager
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          totalItems={totalItems}
          pageForward={pageForward}
          pageBackward={pageBackward}
        />
      )}
    </section>
  )
}

export default PageableControlledList
