import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/single-use/Header"
import { twMerge } from "tailwind-merge"

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
      <body className={twMerge(jost.className, "flex flex-col items-center min-h-screen")}>
        <Header />
        {children}
      </body>
    </html>
  )
}
