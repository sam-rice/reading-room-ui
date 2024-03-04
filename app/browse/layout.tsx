"use client"

import { useSearchParams } from "next/navigation"
import { ReactNode } from "react"

export default function Layout({
  form,
  results,
}: {
  form: ReactNode
  results: ReactNode
}) {
  const searchParams = useSearchParams()

  if (searchParams.has("q") && searchParams.has("cat")) return results
  else return form

  // return (
  //   <>{searchParams.has("q") && searchParams.has("cat") ? results : form}</>
  // )
}
