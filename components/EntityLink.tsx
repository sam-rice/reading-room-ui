"use client"

import classNames from "classnames"
import Link from "next/link"
import { FC } from "react"
import { twMerge } from "tailwind-merge"

type EntityLinkType = "author" | "book"

interface EntityLinkProps {
  libraryKey: string
  title: string
  variant: EntityLinkType
  className?: string
  isSubHeader?: boolean
}

const EntityLink: FC<EntityLinkProps> = ({
  libraryKey,
  title,
  variant,
  className,
  isSubHeader,
}) => {
  const linkClasses = classNames(
    { "text-theme-gray-400": !isSubHeader },
    { "text-xl": isSubHeader },
  )

  return (
    <Link
      className={twMerge("w-fit hover:underline", linkClasses, className)}
      href={`/${variant}/${libraryKey}`}
    >
      {isSubHeader ? <h2>{title}</h2> : title}
    </Link>
  )
}

export default EntityLink
