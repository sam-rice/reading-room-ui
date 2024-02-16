import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps {
  children: ReactNode
  className?: string
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({ className, children, onClick }) => (
  <button
    className={twMerge(
      "bg-theme-gray-400 rounded-theme-small hover:bg-theme-gray-500 px-6 py-1 text-white transition-colors duration-150",
      className,
    )}
    onClick={onClick}
  >
    {children}
  </button>
)
