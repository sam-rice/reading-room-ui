import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/single-use/Header"
import { twMerge } from "tailwind-merge"
import Link from "next/link"

const jost = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Reading Room",
  description: "UI for the Reading Room web application",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body
        className={twMerge(
          jost.className,
          "flex min-h-screen flex-col items-center",
        )}
      >
        <Header />
        {children}
        <footer className="w-full text-right text-theme-gray-400">
          created by Sam Rice | view on{" "}
          <Link
            className=" text-blue-600 hover:underline mr-2"
            href="https://github.com/sam-rice/reading-room-ui"
          >
            GitHub
          </Link>
        </footer>
      </body>
    </html>
  )
}
