import { getSearchResults } from "@/actions/browse"
import PageableList from "@/components/PageableList"
import { SearchCategory } from "@/interfaces/utilities"
import { ReactNode } from "react"

interface ResultsProps<T> {
  query: string
  category: SearchCategory
  resultsMapper: (results: T[]) => ReactNode[]
}

async function Results<T>({ query, category, resultsMapper }: ResultsProps<T>) {
  const results = await getSearchResults<T>(query, category)

  const searchSummary = (
    <div className="text-theme-gray-400">{`${results.length} ${category === "authors" ? "author" : "book"} ${results.length > 1 ? "results" : "result"} for "${query}"`}</div>
  )

  return (
    <PageableList
      listClassName="grid-cols-1"
      headingNode={searchSummary}
      itemsPerPage={50}
    >
      {resultsMapper(results)}
    </PageableList>
  )
}

export default Results
