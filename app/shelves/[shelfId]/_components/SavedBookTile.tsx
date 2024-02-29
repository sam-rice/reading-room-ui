"use client"

import { deleteBookFromShelf } from "@/actions/persistence"
import EntityImage from "@/components/EntityImage"
import EntityLink from "@/components/EntityLink"
import { IAuthorBasic } from "@/interfaces/browseDtos"
import fallbackCover from "@/public/images/fallback-cover.png"
import ClearIcon from "@mui/icons-material/Clear"
import Image from "next/image"
import { FC } from "react"

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
    try {
      const result = await deleteBookFromShelf(shelfId, bookId)
      if (!result.success) throw new Error("Failed to remove book from shelf.")
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

  const formattedUserNote =
    !!userNote && userNote.length > 115
      ? userNote.substring(0, 116) + "..."
      : userNote

  return (
    <li className="relative col-span-1 flex h-48 rounded-theme-large bg-theme-beige-400 px-8 py-5 transition-colors hover:bg-theme-beige-500">
      <EntityImage
        className="mr-6 h-full"
        fallbackClassName="border-theme-gray-400 mr-6 border"
        alt={`cover for ${title}`}
        src={coverUrl}
        fallbackWidth={110}
        variant="book"
      />

      <div className="mt-3">
        <EntityLink
          routeSegmentId={libraryKey}
          title={title}
          variant="book"
          isSubHeader
        />
        <div className="mb-3 text-theme-gray-400">{authorsNode}</div>
        <div className="text-sm italic text-theme-gray-400">
          {formattedUserNote}
        </div>
      </div>
      <button className="absolute right-3 top-2" onClick={deleteBook}>
        <ClearIcon className="hover:text-red-800" fontSize="small" />
      </button>
    </li>
  )
}

export default SavedBookTile
