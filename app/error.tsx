"use client"

import LinkButton from "@/components/LinkButton"
import PageContainer from "@/components/PageContainer"
import { useEffect } from "react"

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <PageContainer className="justify-center items-center">
      <h1 className="mb-8 text-xl">Something went wrong!</h1>
      <LinkButton href="/" variant="dark">
        Back to Home
      </LinkButton>
    </PageContainer>
  )
}
