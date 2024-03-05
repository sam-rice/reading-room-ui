import Image from "next/image"
import { FC } from "react"
import { twMerge } from "tailwind-merge"

type IEntityImage = "book" | "author"

interface EntityImageProps {
  className?: string
  fallbackClassName?: string
  alt: string
  src: string | null
  fallbackWidth: number
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
        <img className={twMerge("h-fit", className)} alt={alt} src={src} />
      ) : (
        <Image
          className={twMerge("h-auto", fallbackClassName)}
          alt={`${variant === "book" ? "book cover" : "author photo"} not available.`}
          src="/fallback-cover.png"
          width={fallbackWidth}
          height={0}
        />
      )}
    </>
  )
}

export default EntityImage
