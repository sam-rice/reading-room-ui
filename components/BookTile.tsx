"use client"

import { FC } from "react"
import fallbackCover from "@/public/images/fallback-cover.png"
import Image from "next/image"
import { IAuthorBasic } from "@/interfaces/entities"
import Link from "next/link"

interface BookTileProps {
  libraryKey: string
  title: string
  author: IAuthorBasic
  hasMultipleAuthors: boolean
  subjects: string[] | null
  publishDate: string
  coverUrl: string | null
}

const BookTile: FC<BookTileProps> = ({
  libraryKey,
  title,
  author,
  hasMultipleAuthors,
  subjects,
  publishDate,
  coverUrl,
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
      <div className="mt-3">
        <Link href={`/book/${libraryKey}`}>
          <h2 className="w-fit text-xl hover:underline">{title}</h2>
        </Link>
        <div className="text-base">{publishDate}</div>
        <div className="mb-3 text-theme-gray-300">
          <Link className="hover:underline" href={`/author/${author.libraryKey}`}>{author.name}</Link>
          {hasMultipleAuthors && " and others"}
        </div>
        {subjects && (
          <div className="text-sm italic text-theme-gray-300">
            {subjects.slice(0, 4).join(", ")}
          </div>
        )}
      </div>
    </li>
  )
}

export default BookTile
