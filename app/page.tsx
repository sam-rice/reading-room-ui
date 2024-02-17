import { FC } from "react"
import { DM_Serif_Display } from "next/font/google"
import { twMerge } from "tailwind-merge"

export const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
})

const Home: FC = () => {
  return (
    <main className="flex w-full max-w-6xl flex-1 flex-col items-center justify-center">
      <h1 className={twMerge(dmSerifDisplay.className, "mb-14 text-5xl")}>
        READING ROOM
      </h1>
    </main>
  )
}

export default Home
