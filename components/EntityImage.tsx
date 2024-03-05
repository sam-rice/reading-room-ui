import fallbackCover from "@/public/images/fallback-cover.png"
import Image from "next/image"
import { FC } from "react"
import { twMerge } from "tailwind-merge"

type IEntityImage = "book" | "author"

interface EntityImageProps {
  className?: string
  fallbackClassName?: string
  alt: string
  src: string | null
  variant: IEntityImage
}

const EntityImage: FC<EntityImageProps> = ({
  className,
  fallbackClassName,
  alt,
  src,
  variant,
}) => {
  const SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  return (
    <div className={twMerge("relative w-24", className)}>
      {src ? (
        <Image alt={alt} src={src} fill quality={100} sizes={SIZES} />
      ) : (
        <Image
          className={fallbackClassName}
          alt={`${variant === "book" ? "book cover" : "author photo"} not available.`}
          src={fallbackCover}
          sizes={SIZES}
          fill
        />
      )}
    </div>
  )
}

export default EntityImage
