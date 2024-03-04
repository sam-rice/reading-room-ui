"use client"

import PageContainer from "@/components/PageContainer"
import { DM_Serif_Display } from "next/font/google"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

export default function ResultsLayout({ children }: { children: ReactNode }) {
  return (
    <PageContainer className="max-w-5xl">
      <h1 className={twMerge(dmSerifDisplay.className, "mb-1 mt-16 text-3xl")}>
        BROWSE LIBRARY
      </h1>
      {children}
    </PageContainer>
  )
}
