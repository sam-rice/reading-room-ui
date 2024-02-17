"use client"

import Image from "next/image"
import logo from "../../public/images/Logo.png"
import Link from "next/link"
import { Search } from "@mui/icons-material"
import { useState, KeyboardEvent, FC } from "react"
import { twMerge } from "tailwind-merge"
import { DM_Serif_Display } from "next/font/google"

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

export const Header: FC = () => {
  const [query, setQuery] = useState("")

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") navigateToSearch()
  }

  const navigateToSearch = () => console.log(`search for ${query}`)

  return (
    <header className="mt-4 flex h-20 w-full justify-center bg-theme-beige-500">
      <div className="flex h-full w-full max-w-6xl justify-between">
        <div className="flex h-full w-2/5 items-center justify-between">
          <Link className="h-5/6" href="/">
            <Image
              className="h-full w-auto"
              src={logo}
              priority
              alt="Reading Room logo"
            />
          </Link>
          <nav className="flex h-full items-center justify-between">
            <ul className={twMerge(dmSerifDisplay.className, "flex text-lg")}>
              <li className="mr-8">
                <Link href="/">MY COLLECTION</Link>
              </li>
              <li>
                <Link href="/browse">BROWSE LIBRARY</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex w-1/3 items-center justify-between">
          <span className="relative h-1/2 w-4/5">
            <button
              className="absolute right-[7px] top-[9px]"
              onClick={navigateToSearch}
            >
              <Search className="text-theme-gray-400 hover:text-theme-gray-500 transition-colors"/>
            </button>
            <input
              className="rounded-theme-small h-full w-full pl-3"
              value={query}
              placeholder="Search books"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </span>
          <Link href="/login">log in</Link>
        </div>
      </div>
    </header>
  )
}
