import { IAuthorBasic } from "@/interfaces/browseDtos"
import { FC } from "react"
import EntityImage from "./EntityImage"
import EntityLink from "./EntityLink"

interface BookTileProps {
  libraryKey: string
  title: string
  authors: IAuthorBasic[] | null
  hasMultipleAuthors?: boolean
  subjects: string[] | null
  publishDate: string | number | null
  coverUrl: string | null
  editionCount?: number
}

const BookTile: FC<BookTileProps> = ({
  libraryKey,
  title,
  authors,
  hasMultipleAuthors,
  subjects,
  publishDate,
  coverUrl,
  editionCount,
}) => {
  return (
    <li className="relative col-span-1 flex h-48 rounded-theme-large bg-theme-beige-400 px-8 py-5 transition-colors hover:bg-theme-beige-500">
      <EntityImage
        className="mr-6 h-full"
        fallbackClassName="mr-6 border border-theme-gray-400"
        alt={`cover for ${title}`}
        src={coverUrl}
        fallbackWidth={110}
        variant={"book"}
      />
      <div>
        <EntityLink
          className="text-2xl"
          routeSegmentId={libraryKey}
          title={title}
          variant="book"
        />
        <div className="mb-2 text-theme-gray-300">
          {authors && (
            <EntityLink
              routeSegmentId={authors[0].libraryKey}
              title={authors[0].name}
              variant="author"
            />
          )}
          {(authors && authors.length > 1) ||
            (hasMultipleAuthors && " and others")}
        </div>
        {!!publishDate && <div className="mb-2 text-base">{publishDate}</div>}
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
