import { getShelf } from "@/actions/persistence"
import PageContainer from "@/components/PageContainer"
import PageableList from "@/components/PageableList"
import SavedBookTile from "./_components/SavedBookTile"
import DeleteShelfDialogButton from "./_components/DeleteShelfDialogButton"
import { ISavedBook, IShelfDetails } from "@/interfaces/persistenceDtos"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Link from "next/link"
import { FC } from "react"

interface ShelfDetailsPageProps {
  params: {
    shelfId: string
  }
}

const ShelfDetailsPage: FC<ShelfDetailsPageProps> = async ({ params }) => {
  const shelf: IShelfDetails = await getShelf(parseInt(params.shelfId))

  const bookTiles = shelf.books.map((b: ISavedBook) => (
    <SavedBookTile
      key={b.bookId}
      bookId={b.bookId}
      shelfId={b.shelfId}
      libraryKey={b.libraryKey}
      title={b.title}
      authors={b.authors}
      coverUrl={b.coverUrl}
      userNote={b.userNote}
    />
  ))

  return (
    <>
      <PageContainer>
        <Link className="my-6 w-fit" href={"/shelves"}>
          <ArrowBackIcon className="text-4xl" />
        </Link>
        <div className="mb-8 w-full">
          <div className="flex w-full items-end justify-between">
            <div>
              <div className="flex items-baseline">
                <h1 className="mr-4 text-2xl">{shelf.title}</h1>
                <span className="text-sm italic text-theme-gray-300">{`(${shelf.totalSavedBooks} books)`}</span>
              </div>
              <div className="text-theme-gray-300">{shelf.description}</div>
            </div>
            <DeleteShelfDialogButton
              shelfId={params.shelfId}
              shelfName={shelf.title}
            />
          </div>
        </div>
        {bookTiles.length ? (
          <PageableList itemsPerPage={50}>{bookTiles}</PageableList>
        ) : (
          <div className="text-center mt-16 text-theme-gray-500 text-xl">No books added.</div>
        )}
      </PageContainer>
    </>
  )
}

export default ShelfDetailsPage
