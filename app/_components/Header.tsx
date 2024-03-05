"use client"

import { logout } from "@/actions/authorization"
import { DM_Serif_Display } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC } from "react"
import { twMerge } from "tailwind-merge"
import HeaderSearch from "./HeaderSearch"

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

const Header: FC = () => {
  const pathname = usePathname()

  const isOnAuthPage =
    pathname.includes("login") || pathname.includes("register")

  const handleLogout = () => logout()

  return (
    <header className="mt-4 flex h-20 w-full justify-center bg-theme-beige-500">
      <div className="flex h-full w-full max-w-6xl justify-between">
        <div className="flex h-full w-2/5 items-center justify-between">
          <Link className="h-5/6" href="/shelves">
            <Image
              className="h-full w-auto"
              src="/images/logo.png"
              priority
              alt="Reading Room logo"
              unoptimized
              height={0}
              width={0}
            />
          </Link>
          {!isOnAuthPage && (
            <nav className="flex h-full items-center justify-between">
              <ul className={twMerge(dmSerifDisplay.className, "flex text-lg")}>
                <li className="mr-8">
                  <Link href="/shelves">MY SHELVES</Link>
                </li>
                <li>
                  <Link href="/browse">BROWSE LIBRARY</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
        <div className="flex w-1/3 items-center justify-between">
          {!isOnAuthPage && (
            <>
              <HeaderSearch />
              <button onClick={handleLogout}>log out</button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
