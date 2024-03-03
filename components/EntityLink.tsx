"use client"

import Link from "next/link"
import { FC } from "react"
import { twMerge } from "tailwind-merge"

type EntityLinkType = "author" | "book" | "shelf"

interface EntityLinkProps {
  routeSegmentId: string | number
  title: string
  variant: EntityLinkType
  className?: string
  isSubHeader?: boolean
}

const EntityLink: FC<EntityLinkProps> = ({
  routeSegmentId,
  title,
  variant,
  className,
  isSubHeader,
}) => {
  const routeSegment = variant === "shelf" ? "shelves" : variant

  return (
    <Link
      className={twMerge("w-fit hover:underline", className)}
      href={`/${routeSegment}/${routeSegmentId}`}
    >
      {isSubHeader ? <h2 className="text-xl">{title}</h2> : title}
    </Link>
  )
}

export default EntityLink
