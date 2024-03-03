import { getSearchResults } from "@/actions/browse"
import { EntityType } from "@/actions/browse"
import PageableList from "@/components/PageableList"
import { ReactNode } from "react"

interface ResultsProps<T> {
  query: string
  category: EntityType
  resultsMapper: (results: T[]) => ReactNode[]
}

async function Results<T>({ query, category, resultsMapper }: ResultsProps<T>) {
  const results = await getSearchResults<T>(query, category)

  const searchSummary = (
    <div className="text-theme-gray-400">
      {`${results.length} ${category === "authors" ? "author" : "book"} ${results.length === 1 ? "result" : "results"} for "${query}"`}
    </div>
  )

  return (
    <PageableList
      noItemsMessage="No results."
      listClassName="grid-cols-1"
      headingNode={searchSummary}
      itemsPerPage={50}
    >
      {resultsMapper(results)}
    </PageableList>
  )
}

export default Results
