import type { Metadata } from "next"
import { Jost, DM_Serif_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"

const jost = Jost({ subsets: ["latin"] })

export const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

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
      <body className={jost.className}>
        <Header />
        <div className="w-full flex items-center flex-col">
          <div className="w-full max-w-6xl">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
