"use client"

import classNames from "classnames"
import { FC, useState } from "react"
import { twMerge } from "tailwind-merge"

interface SavedBookUserNoteProps {
  userNoteDefaultValue: string | null
  submitUpdate: (updatedNote: string) => void
}

const SavedBookUserNote: FC<SavedBookUserNoteProps> = ({
  userNoteDefaultValue,
  submitUpdate,
}) => {
  const [userNoteValue, setUserNoteValue] = useState(userNoteDefaultValue || "")
  const buttonVisible = userNoteValue !== userNoteDefaultValue && userNoteValue !== ""

  const handleOnBlur = () => {
    if (userNoteValue === "") setUserNoteValue(userNoteDefaultValue || "")
  }

  const handleClick = () => {
    submitUpdate(userNoteValue)
  }

  return (
    <label className="text-sm italic text-theme-gray-400 block relative">
      <div>note:</div>
      <textarea
        className={twMerge(
          "w-full bg-theme-beige-400 py-1 px-2 border border-theme-gray-200 hover:bg-theme-beige-200 resize-none",
          classNames({ "pr-16": buttonVisible }),
        )}
        maxLength={115}
        value={userNoteValue}
        onChange={(e) => setUserNoteValue(e.target.value)}
        onBlur={handleOnBlur}
      />
      {buttonVisible && (
        <button
          className="hover:underline absolute text-black right-5 bottom-[17px] bg-theme-beige-400 h-[26px] w-12 rounded-theme-small"
          onClick={handleClick}
        >
          save
        </button>
      )}
    </label>
  )
}

export default SavedBookUserNote
