"use client"

import LinkButton from "@/components/LinkButton"
import PageContainer from "@/components/PageContainer"
import { Jost } from "next/font/google"
import { useEffect } from "react"
import { twMerge } from "tailwind-merge"

const jost = Jost({ subsets: ["latin"] })

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body
        className={twMerge(
          jost.className,
          "flex min-h-screen flex-col items-center",
        )}
      >
        <PageContainer className="justify-center items-center">
          <h1 className="mb-8 text-xl">Something went wrong!</h1>
          <LinkButton href="/" variant="dark">
            Back to Home
          </LinkButton>
        </PageContainer>
      </body>
    </html>
  )
}
