"use client"

import { FC } from "react"
import { useSearchParams } from "next/navigation"
import BrowseLandingPage from "./landingPage"
import ResultsPage from "./ResultsPage"

const BrowsePage: FC = () => {
  const searchParams = useSearchParams()

  return (
    <>
      {searchParams.has("q") && searchParams.has("cat") ? (
        <ResultsPage />
      ) : (
        <BrowseLandingPage />
      )}
    </>
  )
}

export default BrowsePage
