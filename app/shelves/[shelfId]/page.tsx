import { getShelf, updateShelf } from "@/actions/persistence"
import PageContainer from "@/components/PageContainer"
import PageableControlledList from "@/components/PageableControlledList"
import { ISavedBook, IShelfDetails } from "@/interfaces/persistenceDtos"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Link from "next/link"
import { FC } from "react"
import DeleteShelfDialogButton from "./_components/DeleteShelfDialogButton"
import SavedBookTile from "./_components/SavedBookTile"
import ShelfHeadingInputs from "./_components/ShelfHeadingInputs"

interface ShelfDetailsPageProps {
  params: {
    shelfId: string
  }
}

const ShelfDetailsPage: FC<ShelfDetailsPageProps> = async ({ params }) => {
  const shelf: IShelfDetails = await getShelf(parseInt(params.shelfId))

  const submitShelfUpdate = async (title: string, description: string) => {
    "use server"
    try {
      const result = await updateShelf(
        parseInt(params.shelfId),
        title,
        description,
      )
      if (!result.success) throw new Error("Failed to update shelf.")
    } catch (error) {
      console.error(error)
    }
  }

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
        <Link
          className="my-6 w-fit"
          href={"/shelves"}
          aria-label="go back to all shelves page"
        >
          <ArrowBackIcon className="text-4xl" />
        </Link>
        <div className="mb-8 w-full">
          <div className="flex w-full items-end justify-between">
            <ShelfHeadingInputs
              title={shelf.title}
              description={shelf.description}
              updateShelf={submitShelfUpdate}
            />
            <DeleteShelfDialogButton
              shelfId={params.shelfId}
              shelfName={shelf.title}
            />
          </div>
        </div>

        <PageableControlledList itemsPerPage={50} noItemsMessage="No books yet.">
          {bookTiles}
        </PageableControlledList>
      </PageContainer>
    </>
  )
}

export default ShelfDetailsPage
