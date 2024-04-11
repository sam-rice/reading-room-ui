import { getAllShelves } from "@/actions/persistence"
import PageContainer from "@/components/PageContainer"
import PageableControlledList from "@/components/PageableControlledList"
import { IShelfBasic } from "@/interfaces/persistenceDtos"
import { FC } from "react"
import NewShelfDialogButton from "./_components/NewShelfDialogButton"
import ShelfTile from "./_components/ShelfTile"

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
            <span className="text-sm italic text-theme-gray-300">{`(${shelves.length} ${shelves.length === 1 ? "shelf" : "shelves"} total)`}</span>
          </div>
          <NewShelfDialogButton />
        </div>
        <PageableControlledList
          listClassName="grid-cols-1"
          itemsPerPage={20}
          noItemsMessage="No shelves yet."
        >
          {shelfTiles}
        </PageableControlledList>
      </PageContainer>
    </>
  )
}

export default ShelvesPage
