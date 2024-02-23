"use client"

import PageContainer from "@/components/PageContainer"
import PageableList from "@/components/PageableList"
import ShelfTile from "@/components/ShelfTile"
import NewShelfDialog from "@/components/single-use/NewShelfDialog"
import { IShelfBasic } from "@/interfaces/persistenceDtos"
import AddIcon from "@mui/icons-material/Add"
import { DM_Serif_Display } from "next/font/google"
import { FC, useState } from "react"
import shelves from "@/placeholder-data/shelves.json"

export const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
})

const ShelvesPage: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const toggleDialogOpen = () => setDialogOpen(!dialogOpen)

  const shelfTiles = shelves.map((s: IShelfBasic) => (
    <ShelfTile
      shelfId={s.shelfId}
      key={s.shelfId}
      title={s.title}
      description={s.description}
      totalSavedBooks={s.totalSavedBooks}
      coverUrl={s.featuredCoverUrl}
    />
  ))

  return (
    <>
      <PageContainer>
        <div className="mb-7 flex h-24 w-full items-end justify-between">
          <div>
            <h1 className="mr-4 text-2xl">My Shelves</h1>
            <span className="text-sm italic text-theme-gray-300">{`(${shelves.length} total shelves)`}</span>
          </div>
          <button className="flex items-center" onClick={toggleDialogOpen}>
            new shelf{" "}
            <span className="bg-theme-gray-200 ml-2 flex aspect-square w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-theme-gray-300">
              <AddIcon />
            </span>
          </button>
        </div>
        <PageableList listClassName="grid-cols-1" itemsPerPage={20}>
          {shelfTiles}
        </PageableList>
      </PageContainer>
      <NewShelfDialog isOpen={dialogOpen} closeDialog={toggleDialogOpen} />
    </>
  )
}

export default ShelvesPage
