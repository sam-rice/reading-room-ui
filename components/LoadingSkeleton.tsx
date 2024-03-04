import { DM_Serif_Display } from "next/font/google"
import { FC } from "react"
import { twMerge } from "tailwind-merge"
import PageContainer from "./PageContainer"

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

const LoadingSkeleton: FC = () => {
  return (
    <PageContainer className="relative items-center justify-center">
      <div className="animate-theme-slow-spin absolute h-40 w-40 rounded-full border-8 border-dotted border-slate-300"></div>
      <h1
        className={twMerge(
          dmSerifDisplay.className,
          "animate-theme-text h-8 bg-gradient-to-r from-slate-600 via-slate-400 to-slate-900 bg-clip-text text-2xl text-transparent",
        )}
      >
        loading...
      </h1>
    </PageContainer>
  )
}

export default LoadingSkeleton
