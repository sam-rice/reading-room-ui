"use client"

import { useSearchParams } from "next/navigation"
import { FC } from "react"
import ResultsPage from "./ResultsPage"
import BrowseLandingPage from "./landingPage"

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
