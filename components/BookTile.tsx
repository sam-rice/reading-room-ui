import { IAuthorBasic } from "@/interfaces/browseDtos"
import fallbackCover from "@/public/images/fallback-cover.png"
import Image from "next/image"
import { FC } from "react"
import EntityLink from "./EntityLink"

interface BookTileProps {
  libraryKey: string
  title: string
  author: IAuthorBasic
  hasMultipleAuthors: boolean
  subjects: string[] | null
  publishDate: string | number
  coverUrl: string | null
  editionCount?: number
}

const BookTile: FC<BookTileProps> = ({
  libraryKey,
  title,
  author,
  hasMultipleAuthors,
  subjects,
  publishDate,
  coverUrl,
  editionCount,
}) => {
  return (
    <li className="relative col-span-1 flex h-48 rounded-theme-large bg-theme-beige-400 px-8 py-5 transition-colors hover:bg-theme-beige-500">
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
      <div>
        <EntityLink
          className="text-2xl"
          routeSegmentId={libraryKey}
          title={title}
          variant="book"
        />
        <div className="mb-2 text-theme-gray-300">
          <EntityLink
            routeSegmentId={author.libraryKey}
            title={author.name}
            variant="author"
          />
          {hasMultipleAuthors && " and others"}
        </div>
        <div className="mb-2 text-base">{publishDate}</div>
        {!!editionCount && <div>{editionCount} editions</div>}
        {subjects && title.length < 40 && (
          <div className="text-sm italic text-theme-gray-300">
            {subjects.slice(0, 4).join(", ")}
          </div>
        )}
      </div>
    </li>
  )
}

export default BookTile
