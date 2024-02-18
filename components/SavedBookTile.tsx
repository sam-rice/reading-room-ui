import Link from "next/link"
import { FC } from "react"
import fallbackCover from "@/public/images/fallback-cover.png"
import Image from "next/image"

interface SavedBookTileProps {
  bookId: number
  apiKey: string
  title: string
  authors: string[]
  coverUrl: string | null
  userNote: string | null
  //make deleteBook required
  deleteBook?: (bookId: number) => void
}

const SavedBookTile: FC<SavedBookTileProps> = ({
  bookId,
  apiKey,
  title,
  authors,
  coverUrl,
  userNote,
  deleteBook,
}) => {

  const formattedAuthors = authors.length > 1 ? authors.join(", ") : authors[0]

  return (
    <Link
      className="col-span-1 flex h-48 rounded-theme-large bg-theme-beige-400 px-8 py-5 transition-colors hover:bg-theme-beige-500"
      href={`/books/${apiKey}`}
      role="listitem"
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
      <div className="my-3">
        <h2 className="text-xl">{title}</h2>
        <div className="text-theme-gray-300 mb-3">{formattedAuthors}</div>
        <div className="text-theme-gray-300 italic text-sm">{userNote}</div>
      </div>
    </Link>
  )
}

export default SavedBookTile
