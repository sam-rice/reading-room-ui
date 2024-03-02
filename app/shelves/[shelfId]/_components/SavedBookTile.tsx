import { deleteBookFromShelf, updateBook } from "@/actions/persistence"
import EntityImage from "@/components/EntityImage"
import EntityLink from "@/components/EntityLink"
import { IAuthorBasic } from "@/interfaces/browseDtos"
import { FC } from "react"
import SavedBookDeleteButton from "./SavedBookDeleteButton"
import SavedBookUserNote from "./SavedBookUserNote"

interface SavedBookTileProps {
  bookId: number
  shelfId: number
  libraryKey: string
  title: string
  authors: IAuthorBasic[]
  coverUrl: string | null
  userNote: string | null
}

const SavedBookTile: FC<SavedBookTileProps> = ({
  bookId,
  shelfId,
  libraryKey,
  title,
  authors,
  coverUrl,
  userNote,
}) => {
  const deleteBook = async () => {
    "use server"
    try {
      const result = await deleteBookFromShelf(shelfId, bookId)
      if (!result.success) throw new Error("Failed to remove book from shelf.")
    } catch (error) {
      console.error(error)
    }
  }

  const submitUserNoteUpdate = async (updatedNote: string) => {
    "use server"
    try {
      const result = await updateBook(shelfId, bookId, updatedNote)
      if (!result.success) throw new Error("Failed to update user note.")
    } catch (error) {
      console.error(error)
    }
  }

  const authorsNode = (
    <>
      <EntityLink
        routeSegmentId={authors[0].libraryKey}
        title={authors[0].name}
        variant="author"
      />
      {authors.length > 1 && (
        <>
          {", "}
          <EntityLink
            routeSegmentId={authors[1].libraryKey}
            title={authors[1].name}
            variant="author"
          />
        </>
      )}
      {authors.length > 2 && " and others"}
    </>
  )

  return (
    <li className="relative col-span-1 flex h-52 rounded-theme-large bg-theme-beige-400 px-8 py-5 transition-colors hover:bg-theme-beige-500">
      <EntityImage
        className="mr-6 h-full"
        fallbackClassName="border-theme-gray-400 mr-6 border"
        alt={`cover for ${title}`}
        src={coverUrl}
        fallbackWidth={110}
        variant="book"
      />
      <div className="mt-2 grow">
        <EntityLink
          routeSegmentId={libraryKey}
          title={title}
          variant="book"
          isSubHeader
        />
        <div className="mb-2 text-theme-gray-400">{authorsNode}</div>
        <SavedBookUserNote
          userNoteDefaultValue={userNote}
          submitUpdate={submitUserNoteUpdate}
        />
      </div>
      <SavedBookDeleteButton deleteBook={deleteBook} />
    </li>
  )
}

export default SavedBookTile
