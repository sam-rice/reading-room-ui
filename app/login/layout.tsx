import { DM_Serif_Display } from "next/font/google"
import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
})

interface LoginLayoutProps {
  children: ReactNode
}

const LoginLayout: FC<LoginLayoutProps> = ({ children }) => {
  return (
    <main className="flex w-full max-w-6xl flex-1 flex-col items-center justify-center">
      <h1 className={twMerge(dmSerifDisplay.className, "mb-14 text-5xl")}>
        READING ROOM
      </h1>
      <div className="bg-theme-beige-400 rounded-theme-large flex h-96 w-full flex-col items-center justify-center">
        {children}
      </div>
    </main>
  )
}

export default LoginLayout
