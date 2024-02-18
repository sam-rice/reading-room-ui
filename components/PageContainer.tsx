import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface PageContainerProps {
  className?: string
  children: ReactNode
}

const PageContainer: FC<PageContainerProps> = ({ children, className }) => (
  <main
    className={twMerge(
      "flex w-full max-w-6xl flex-1 flex-col justify-start",
      className,
    )}
  >
    {children}
  </main>
)

export default PageContainer
