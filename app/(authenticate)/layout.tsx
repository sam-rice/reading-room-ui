import PageContainer from "@/components/PageContainer"
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
    <PageContainer className="items-center justify-center">
      <h1 className={twMerge(dmSerifDisplay.className, "mb-14 text-5xl")}>
        READING ROOM
      </h1>
      <div className="flex h-fit w-full flex-col items-center justify-center rounded-theme-large bg-theme-beige-400">
        {children}
      </div>
    </PageContainer>
  )
}

export default LoginLayout
