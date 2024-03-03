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
      <h1 className="mb-10 text-xl">
        Something went wrong! Could not find info for book.
      </h1>
      <Button onClick={reset} variant="dark">
        Try Again
      </Button>
      <div>or</div>
      <LinkButton href="/" variant="dark">
        Back to Home
      </LinkButton>
    </PageContainer>
  )
}
