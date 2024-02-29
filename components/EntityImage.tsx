import fallbackCover from "@/public/images/fallback-cover.png"
import Image from "next/image"
import { FC } from "react"
import { twMerge } from "tailwind-merge"

type IEntityImage = "book" | "author"

interface EntityImageProps {
  className?: string
  fallbackClassName?: string
  alt: string
  src: string | null,
  fallbackWidth: number,
  variant: IEntityImage
}

const EntityImage: FC<EntityImageProps> = ({
  className,
  fallbackClassName,
  alt,
  src,
  fallbackWidth,
  variant,
}) => {
  return (
    <>
      {src ? (
        <img className={className} alt={alt} src={src} />
      ) : (
        <Image
          className={twMerge("w-auto", fallbackClassName)}
          alt={`${variant === "book" ? "book cover" : "author photo"} not available.`}
          src={fallbackCover}
          width={fallbackWidth}
        />
      )}
    </>
  )
}

export default EntityImage