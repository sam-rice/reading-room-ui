"use client"

import { isActiveSession } from "@/actions/session"
import { logout } from "@/actions/session"
import logo from "@/public/images/logo.png"
import { DM_Serif_Display } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { FC, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import HeaderSearch from "./HeaderSearch"

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

const Header: FC = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoadingSession, setIsLoadingSession] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    getSessionStatus()
  }, [pathname])

  const getSessionStatus = async () => {
    const status = await isActiveSession()
    setIsLoggedIn(status)
    setIsLoadingSession(false)
  }

  const handleLogout = async () => {
    await logout()
    router.push("/login")
  }

  return (
    <header className="mt-4 flex h-20 w-full justify-center bg-theme-beige-500">
      <div className="flex h-full w-full max-w-6xl justify-between">
        <div className="flex h-full w-2/5 items-center justify-between">
          <Link className="h-5/6" href="/shelves">
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
                <Link href="/shelves">MY SHELVES</Link>
              </li>
              <li>
                <Link href="/browse">BROWSE LIBRARY</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex w-1/3 items-center justify-between">
          <HeaderSearch />
          {!isLoadingSession && (
            <span>
              {isLoggedIn ? (
                <button onClick={handleLogout}>log out</button>
              ) : (
                <Link href="/login">log in</Link>
              )}
            </span>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header