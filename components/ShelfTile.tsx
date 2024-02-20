import Link from "next/link"
import { FC } from "react"

interface ShelfTileProps {
  shelfId: number
  title: string
  description: string
  coverUrl: string | null
  totalSavedBooks: number
}

const ShelfTile: FC<ShelfTileProps> = ({
  shelfId,
  title,
  description,
  coverUrl,
  totalSavedBooks,
}) => {
  return (
    <Link
      className="flex h-48 w-full items-center justify-between rounded-theme-large bg-theme-beige-400 px-8 py-5 transition-colors hover:bg-theme-beige-500"
      href={`/shelf/${shelfId}`}
      role="listitem"
    >
      {coverUrl && <img className="mr-6 h-full" src={coverUrl} />}
      <div className="flex-1">
        <h2 className="mb-2 text-2xl">{title}</h2>
        <p className="text-theme-gray-300">{description}</p>
      </div>
      <div className="text-xl text-theme-gray-300 ml-5">{totalSavedBooks} books</div>
    </Link>
  )
}

export default ShelfTile
