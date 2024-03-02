import classNames from "classnames"
import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type ButtonVariant = "dark" | "light"

interface ButtonProps {
  className?: string
  children: ReactNode
  variant?: ButtonVariant
  disabled?: boolean
  onClick: () => void
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = "dark",
  disabled = false,
  onClick,
}) => {
  const buttonClasses = classNames(
    {
      "bg-theme-gray-400 text-white hover:bg-theme-gray-500":
        variant === "dark" && !disabled,
    },
    {
      "bg-theme-gray-100 border border-theme-gray-400 hover:bg-theme-gray-200":
        variant === "light" && !disabled,
    },
    {
      "bg-theme-gray-400 text-white bg-theme-gray-300":
        variant === "dark" && disabled,
    },
    {
      "bg-theme-gray-100 border border-theme-gray-400":
        variant === "light" && disabled,
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
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button