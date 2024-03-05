"use client"

import { EntityType } from "@/actions/browse"
import { useSearchParams } from "next/navigation"
import ResultsPage from "./ResultsPage"
import SearchFormPage from "./SearchFormPage"

export default function Layout() {
  const searchParams = useSearchParams()

  const query = searchParams.get("q")
  const category = searchParams.get("cat")
  const pageNum = searchParams.get("page")

  if (!!query && !!category && !!pageNum)
    return (
      <ResultsPage
        query={query}
        category={category as EntityType}
        pageNum={parseInt(pageNum)}
      />
    )
  else return <SearchFormPage />
}
