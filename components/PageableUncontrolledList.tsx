"use client"

import { SEARCH_RESULTS_PAGE_SIZE } from "@/utilities/constants"
import { useRouter, useSearchParams } from "next/navigation"
import { Children, FC, ReactNode, useRef } from "react"
import { twMerge } from "tailwind-merge"
import Pager from "./Pager"

interface PageableUncontrolledListProps {
  outerClassName?: string
  listClassName?: string
  headingNode?: ReactNode
  children: ReactNode
  noItemsMessage: string
  totalItems: number
}

const PageableUncontrolledList: FC<PageableUncontrolledListProps> = ({
  outerClassName,
  listClassName,
  children,
  headingNode,
  noItemsMessage,
  totalItems,
}) => {
  const sectionRef = useRef<HTMLElement>(null)
  const router = useRouter()
  const params = useSearchParams()
  const currentPageParam = params.get("page")

  const currentPageNum = currentPageParam ? parseInt(currentPageParam) : 1
  const numberOfPages = Math.ceil(totalItems / SEARCH_RESULTS_PAGE_SIZE)
  const firstItemIndex =
    currentPageNum * SEARCH_RESULTS_PAGE_SIZE - SEARCH_RESULTS_PAGE_SIZE
  const totalCurrentItems = Children.toArray(children).length

  const pageForward = () => {
    router.push(
      `/browse?q=${params.get("q")}&cat=${params.get("cat")}&page=${currentPageNum + 1}`,
    )
  }

  const pageBackward = () => {
    router.push(
      `/browse?q=${params.get("q")}&cat=${params.get("cat")}&page=${currentPageNum - 1}`,
    )
  }

  return (
    <section
      className={twMerge("flex grow flex-col", outerClassName)}
      ref={sectionRef}
    >
      {headingNode}
      {totalCurrentItems ? (
        <div className="mb-3 text-right">
          showing {firstItemIndex + 1} - {firstItemIndex + totalCurrentItems} of{" "}
          {totalItems.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
        {children}
      </ul>
      {!!totalCurrentItems && (
        <Pager
          currentPage={currentPageNum}
          numberOfPages={numberOfPages}
          totalItems={totalItems}
          pageForward={pageForward}
          pageBackward={pageBackward}
        />
      )}
    </section>
  )
}

export default PageableUncontrolledList
