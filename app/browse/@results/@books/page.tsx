"use client"

import { FC } from "react"
import BookResults from "./_components/BookResults"
import { useSearchParams } from "next/navigation"

const BookResultsPage: FC = () => {
  const searchParams = useSearchParams()

  return <BookResults query={searchParams.get("q") || ""} />
}

export default BookResultsPage
