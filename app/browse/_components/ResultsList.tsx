import { getSearchResults } from "@/actions/browse"
import { EntityType } from "@/actions/browse"
import PageableControlledList from "@/components/PageableControlledList"
import { ISearchResultsPage } from "@/interfaces/browseDtos"
import { ReactNode } from "react"

interface ResultsProps<T> {
  query: string
  category: EntityType
  pageNum: number
  resultsMapper: (results: T[]) => ReactNode[]
}

async function Results<T>({ query, category, pageNum, resultsMapper }: ResultsProps<T>) {
  const data = await getSearchResults<ISearchResultsPage<T>>(query, category, pageNum)

  const searchSummary = (
    <div className="text-theme-gray-400">
      {`${data.totalResults.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${category === "authors" ? "author" : "book"} ${data.totalResults === 1 ? "result" : "results"} for "${query}"`}
    </div>
  )

  return (
    <PageableControlledList
      noItemsMessage="No results."
      listClassName="grid-cols-1"
      headingNode={searchSummary}
      totalItems={data.totalResults}
    >
      {resultsMapper(data.results)}
    </PageableControlledList>
  )
}

export default Results
