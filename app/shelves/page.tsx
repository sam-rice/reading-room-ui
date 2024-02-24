import { getAllShelves } from "@/actions/shelf"
import PageContainer from "@/components/PageContainer"
import PageableList from "@/components/PageableList"
import ShelfTile from "@/components/ShelfTile"
import NewShelfDialogButton from "@/components/single-use/NewShelfDialogButton"
import { IShelfBasic } from "@/interfaces/persistenceDtos"
import { DM_Serif_Display } from "next/font/google"
import { FC } from "react"

export const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
})

const ShelvesPage: FC = async () => {
  const shelves = await getAllShelves()

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
          <NewShelfDialogButton />
        </div>
        <PageableList listClassName="grid-cols-1" itemsPerPage={20}>
          {shelfTiles}
        </PageableList>
      </PageContainer>
    </>
  )
}

export default ShelvesPage
