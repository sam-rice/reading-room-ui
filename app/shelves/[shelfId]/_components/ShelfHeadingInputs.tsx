"use client"

import classNames from "classnames"
import { FC, useState } from "react"
import { twMerge } from "tailwind-merge"

interface ShelfHeadingInputsProps {
  title: string
  description: string
  updateShelf: (title: string, description: string) => void
}

const ShelfHeadingInputs: FC<ShelfHeadingInputsProps> = ({
  title,
  description,
  updateShelf,
}) => {
  const [titleValue, setTitleValue] = useState(title)
  const [descriptionValue, setDescriptionValue] = useState(description)

  const titleButtonVisible = titleValue !== title
  const descriptionButtonVisible = descriptionValue !== description

  const handleClick = () => {
    if (titleValue && descriptionValue) updateShelf(titleValue, descriptionValue)
  }

  const handleOnBlur = () => {
    if (titleValue === "") setTitleValue(title)
    if (descriptionValue === "") setDescriptionValue(description)
  }

  return (
    <div className="w-1/2">
      <div className="mb-1 relative w-full">
        <input
          className={twMerge(
            "mr-4 w-full text-2xl rounded-theme-small hover:bg-theme-gray-50 px-2 py-2",
            classNames({ "pr-14": titleButtonVisible }),
          )}
          id="shelf-title"
          name="titleValue"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          onBlur={handleOnBlur}
          maxLength={40}
          role="heading"
          aria-description="shelf name"
        />
        {titleButtonVisible && (
          <button
            className="hover:underline absolute text-black right-[2px] bottom-[3px] h-[43px] w-12 rounded-theme-small"
            onClick={handleClick}
          >
            save
          </button>
        )}
      </div>
      <div className="text-sm italic text-theme-gray-400 block relative w-full">
        <input
          className={twMerge(
            "w-full text-base italic py-1 px-2 hover:bg-theme-gray-50 rounded-theme-small",
            classNames({ "pr-14": descriptionButtonVisible }),
          )}
          name="descriptionValue"
          maxLength={150}
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
          onBlur={handleOnBlur}
          aria-labelledby="shelf-description"
        />
        {descriptionButtonVisible && (
          <button
            className="hover:underline absolute text-black right-[2px] bottom-[2px] h-[30px] w-12 rounded-theme-small"
            onClick={handleClick}
          >
            save
          </button>
        )}
      </div>
    </div>
  )
}

export default ShelfHeadingInputs
