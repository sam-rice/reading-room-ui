"use client"

import { FC } from "react"
import Link from "next/link"

interface AuthorTileProps {
  libraryKey: string
  name: string
  birthDate: string | null
  deathDate: string | null
  topBook: string
  topSubjects: string[] | null
}

const AuthorTile: FC<AuthorTileProps> = ({
  libraryKey,
  name,
  birthDate,
  deathDate,
  topBook,
  topSubjects,
}) => {
  return (
    <Link
      href={`/author/${libraryKey}`}
      className="relative col-span-1 flex h-32 items-center rounded-theme-large bg-theme-beige-400 px-8 py-5 transition-colors hover:cursor-pointer hover:bg-theme-beige-500"
    >
      <div className="min-w-[25%] mr-4">
        <h2 className="text-2xl">{name}</h2>
        {!!birthDate && (
          <div className="mb-2 text-theme-gray-300">
            {birthDate} — {deathDate}
          </div>
        )}
      </div>
      <table>
        <tbody>
          <tr>
            <td className=" w-24">top work:</td>
            <td>{topBook}</td>
          </tr>
          {topSubjects && (
            <tr>
              <td>subjects:</td>
              <td>{topSubjects.slice(0, 6).join(", ")}</td>
            </tr>
          )}
        </tbody>
      </table>
    </Link>
  )
}

export default AuthorTile
