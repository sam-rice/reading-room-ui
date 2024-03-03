"use client"

import ClearIcon from "@mui/icons-material/Clear"
import { FC } from "react"

interface SavedBookDeleteButtonProps {
  deleteBook: () => void
}

const SavedBookDeleteButton: FC<SavedBookDeleteButtonProps> = ({
  deleteBook,
}) => {
  const handleClick = () => deleteBook()

  return (
    <button
      className="absolute right-3 top-2"
      onClick={handleClick}
      aria-label="delete book"
    >
      <ClearIcon className="hover:text-red-800" fontSize="small" />
    </button>
  )
}

export default SavedBookDeleteButton
