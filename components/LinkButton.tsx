"use client"

import classNames from "classnames"
import Link from "next/link"
import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type LinkButtonVariant = "dark" | "light"

interface LinkButtonProps {
  href: string
  children: ReactNode
  className?: string
  variant?: LinkButtonVariant
}

const LinkButton: FC<LinkButtonProps> = ({
  href,
  children,
  className,
  variant = "light",
}) => {
  const linkClasses = classNames(
    {
      "bg-theme-gray-400 text-white hover:bg-theme-gray-500":
        variant === "dark",
    },
    {
      "bg-theme-gray-100 border border-theme-gray-400 hover:bg-theme-gray-200":
        variant === "light",
    },
  )

  return (
    <Link
      className={twMerge(
        "rounded-theme-small px-6 py-1 transition-colors duration-150",
        linkClasses,
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  )
}

export default LinkButton