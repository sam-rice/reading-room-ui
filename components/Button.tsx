import classNames from "classnames"
import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type ButtonVariant = "dark" | "light"

interface ButtonProps {
  className?: string
  children: ReactNode
  variant?: ButtonVariant
  onClick: () => void
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = "dark",
  onClick,
}) => {
  const buttonClasses = classNames(
    {
      "bg-theme-gray-400 hover:bg-theme-gray-500 text-white":
        variant === "dark",
    },
    {
      "bg-theme-gray-100 border border-theme-gray-400 hover:bg-theme-gray-200":
        variant === "light",
    },
  )

  return (
    <button
      className={twMerge(
        "rounded-theme-small px-6 py-1 transition-colors duration-150",
        buttonClasses,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
