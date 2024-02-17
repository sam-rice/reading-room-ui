"use client"

import { FC, useState } from "react"
import { DM_Serif_Display } from "next/font/google"
import AddIcon from "@mui/icons-material/Add"
import NewShelfDialog from "@/components/NewShelfDialog"

export const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
})

const Home: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const toggleDialogOpen = () => setDialogOpen(!dialogOpen)

  return (
    <main className="flex w-full max-w-6xl flex-1 flex-col justify-start">
      <div className="flex h-20 w-full items-end justify-between">
        <div>
          <span className="mr-4 text-2xl">My Shelves</span>
          <span className="text-sm italic text-theme-gray-300">{`(viewing 4 of 4)`}</span>
        </div>
        <button className="flex items-center" onClick={toggleDialogOpen}>
          new shelf{" "}
          <span className="ml-2 flex aspect-square w-8 items-center justify-center rounded-full bg-theme-gray-300 text-white">
            <AddIcon />
          </span>
        </button>
      </div>
      <NewShelfDialog isOpen={dialogOpen} closeModal={toggleDialogOpen} />
    </main>
  )
}

export default Home
