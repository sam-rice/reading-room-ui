import type { Metadata } from "next"
import { Jost } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"

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
      <body className={jost.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
