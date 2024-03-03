"use client"

import classNames from "classnames"
import { FC, useState } from "react"
import { twMerge } from "tailwind-merge"

interface SavedBookUserNoteProps {
  userNoteDefaultValue: string | null
  submitUpdate: (updatedNote: string) => void
  libraryKey: string
}

const SavedBookUserNote: FC<SavedBookUserNoteProps> = ({
  userNoteDefaultValue,
  submitUpdate,
  libraryKey,
}) => {
  const [userNoteValue, setUserNoteValue] = useState(userNoteDefaultValue || "")
  const buttonVisible =
    userNoteValue !== userNoteDefaultValue && userNoteValue !== ""

  const handleOnBlur = () => {
    if (userNoteValue === "") setUserNoteValue(userNoteDefaultValue || "")
  }

  const handleClick = () => {
    submitUpdate(userNoteValue)
  }

  return (
    <label className="relative block text-sm italic text-theme-gray-400">
      <div>note:</div>
      <textarea
        className={twMerge(
          "w-full resize-none border border-theme-gray-200 bg-theme-beige-400 px-2 py-1 transition-all duration-100 hover:bg-theme-beige-200",
          classNames({ "pr-16": buttonVisible }),
        )}
        id={`user-note-${libraryKey}`}
        maxLength={115}
        value={userNoteValue}
        onChange={(e) => setUserNoteValue(e.target.value)}
        onBlur={handleOnBlur}
      />
      {buttonVisible && (
        <button
          className="absolute bottom-[17px] right-5 h-[26px] w-12 rounded-theme-small bg-theme-beige-400 text-black hover:underline"
          onClick={handleClick}
        >
          save
        </button>
      )}
    </label>
  )
}

export default SavedBookUserNote
