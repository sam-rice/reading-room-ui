"use client"

import AddIcon from "@mui/icons-material/Add"
import { FC, useState } from "react"
import NewShelfDialog from "./NewShelfDialog"

const NewShelfDialogButton: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const toggleDialogOpen = () => setDialogOpen(!dialogOpen)

  return (
    <>
      <button
        className="flex items-center"
        onClick={toggleDialogOpen}
        aria-controls="new-shelf-dialog"
      >
        new shelf{" "}
        <span className="ml-2 flex aspect-square w-8 items-center justify-center rounded-full bg-theme-gray-200 text-white transition-colors hover:bg-theme-gray-300">
          <AddIcon />
        </span>
      </button>
      <NewShelfDialog isOpen={dialogOpen} closeDialog={toggleDialogOpen} />
    </>
  )
}

export default NewShelfDialogButton
