"use client"

import { EntityType } from "@/actions/browse"
import LoadingSkeleton from "@/components/LoadingSkeleton"
import PageableUncontrolledList from "@/components/PageableUncontrolledList"
import { ISearchResultsPage } from "@/interfaces/browseDtos"
import { ReactNode, useEffect, useState } from "react"

interface ResultsListProps<T> {
  query: string
  category: EntityType
  pageNum: number
  resultsMapper: (results: T[]) => ReactNode[]
}

function ResultsList<T>({
  query,
  category,
  pageNum,
  resultsMapper,
}: ResultsListProps<T>) {
  const [data, setData] = useState<ISearchResultsPage<T>>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getResults = async () => {
      const response = await fetch(
        `api/search?q=${query}&cat=${category}&page=${pageNum}`,
      )
      const data: ISearchResultsPage<T> = await response.json()
      setData(data)
      setIsLoading(false)
    }
    setIsLoading(true)
    getResults()
  }, [query, category, pageNum])

  return (
    <>
      {!isLoading && !!data && (
        <PageableUncontrolledList
          noItemsMessage="No results."
          listClassName="grid-cols-1"
          headingNode={
            <div className="text-theme-gray-400">
              {`${data.totalResults.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${category === "authors" ? "author" : "book"} ${data.totalResults === 1 ? "result" : "results"} for "${query}"`}
            </div>
          }
          totalItems={data.totalResults}
        >
          {resultsMapper(data.results)}
        </PageableUncontrolledList>
      )}
      {isLoading && <LoadingSkeleton />}
    </>
  )
}

export default ResultsList
