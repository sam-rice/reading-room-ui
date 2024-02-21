"use client"

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
  return (
    <Link
      className={twMerge("hover:underline w-fit", className)}
      href={`/${variant}/${libraryKey}`}
    >
      {isSubHeader ? <h2 className="text-xl">{title}</h2> : title}
    </Link>
  )
}

export default EntityLink
