import { FC, MouseEvent } from "react"
import fallbackCover from "@/public/images/fallback-cover.png"
import Image from "next/image"
import ClearIcon from "@mui/icons-material/Clear"

interface SavedBookTileProps {
  bookId: number
  apiKey: string
  title: string
  authors: string[]
  coverUrl: string | null
  userNote: string | null
  navigateToBook: (apiKey: string) => void
}

const SavedBookTile: FC<SavedBookTileProps> = ({
  bookId,
  apiKey,
  title,
  authors,
  coverUrl,
  userNote,
  navigateToBook,
}) => {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement
    if (element.tagName === "BUTTON" || element.tagName === "svg" || element.tagName === "path") {
      e.stopPropagation()
    } else {
      navigateToBook(apiKey)
    }
  }

  const deleteBook = () => console.log("deleting")

  const formattedAuthors =
    authors.length > 2
      ? `${authors[0]}, ${authors[1]}, and others`
      : authors.length > 1
        ? authors.join(", ")
        : authors[0]

  const formattedUserNote =
    !!userNote && userNote.length > 115
      ? userNote.substring(0, 116) + "..."
      : userNote

  return (
    <li
      className="relative col-span-1 flex h-48 rounded-theme-large bg-theme-beige-400 px-8 py-5 transition-colors hover:cursor-pointer hover:bg-theme-beige-500"
      onClick={handleClick}
    >
      {coverUrl ? (
        <img
          className="mr-6 h-full"
          alt={`cover for ${title}`}
          src={coverUrl}
        />
      ) : (
        <Image
          className="border-theme-gray-400 mr-6 border"
          alt={`cover for ${title}`}
          src={fallbackCover}
          width={110}
        />
      )}
      <div className="mt-3">
        <h2 className="text-xl">{title}</h2>
        <div className="mb-3 text-theme-gray-300">{formattedAuthors}</div>
        <div className="text-sm italic text-theme-gray-300">
          {formattedUserNote}
        </div>
      </div>
      <button className="absolute right-3 top-1" onClick={deleteBook}>
        <ClearIcon className="hover:text-red-800" fontSize="small" />
      </button>
    </li>
  )
}

export default SavedBookTile
