"use client"

import Button from "@/components/Button"
import LinkButton from "@/components/LinkButton"
import PageContainer from "@/components/PageContainer"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <PageContainer className=" justify-center items-center">
      <h1 className="mb-16 text-xl">
        Something went wrong! Could not retrieve shelves.
      </h1>
      <Button className="mb-4" onClick={reset} variant="dark">
        Try Again
      </Button>
      <div>or please check back with us later.</div>
    </PageContainer>
  )
}
