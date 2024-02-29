"use client"

import { deleteBookFromShelf, updateBook } from "@/actions/persistence"
import EntityImage from "@/components/EntityImage"
import EntityLink from "@/components/EntityLink"
import { IAuthorBasic } from "@/interfaces/browseDtos"
import ClearIcon from "@mui/icons-material/Clear"
import classNames from "classnames"
import { FC, useState } from "react"
import { twMerge } from "tailwind-merge"

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
  const [userNoteValue, setUserNoteValue] = useState(userNote || "")
  const buttonVisible = userNoteValue !== userNote && userNoteValue !== ""

  const deleteBook = async () => {
    try {
      const result = await deleteBookFromShelf(shelfId, bookId)
      if (!result.success) throw new Error("Failed to remove book from shelf.")
    } catch (error) {
      console.error(error)
    }
  }

  const submitUserNoteUpdate = async () => {
    try {
      const result = await updateBook(shelfId, bookId, userNoteValue)
      if (!result.success) throw new Error("Failed to update user note.")
    } catch (error) {
      console.error(error)
    }
  }

  const handleOnBlur = () => {
    if (userNoteValue === "") setUserNoteValue(userNote || "")
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
        <label className="text-sm italic text-theme-gray-400 block relative">
          <div>note:</div>
          <textarea
            className={twMerge(
              "w-full bg-theme-beige-400 py-1 px-2 border border-theme-gray-200 hover:bg-theme-beige-200 resize-none",
              classNames({ "pr-14": buttonVisible }),
            )}
            maxLength={115}
            value={userNoteValue}
            onChange={(e) => setUserNoteValue(e.target.value)}
            onBlur={handleOnBlur}
          />
          {buttonVisible && (
            <button
              className="hover:underline absolute text-black right-5 bottom-[17px] bg-theme-beige-400 h-[26px] w-12 rounded-theme-small"
              onClick={submitUserNoteUpdate}
            >
              save
            </button>
          )}
        </label>
      </div>
      <button className="absolute right-3 top-2" onClick={deleteBook}>
        <ClearIcon className="hover:text-red-800" fontSize="small" />
      </button>
    </li>
  )
}

export default SavedBookTile
