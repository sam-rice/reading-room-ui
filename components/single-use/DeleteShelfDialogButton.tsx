"use client"

import RemoveIcon from "@mui/icons-material/Remove"
import { FC, useState } from "react"
import DeleteShelfDialog from "./DeleteShelfDialog"

interface DeleteShelfDialogButtonProps {
  shelfId: string
  shelfName: string
}

const DeleteShelfDialogButton: FC<DeleteShelfDialogButtonProps> = ({
  shelfId,
  shelfName
}) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const deleteShelf = () => console.log(`deleting shelf ${shelfName} with id# ${shelfId}`)

  const toggleDialogOpen = () => setDialogOpen(!dialogOpen)

  return (
    <>
      <button className="flex items-center" onClick={toggleDialogOpen}>
        delete shelf{" "}
        <span className="bg-theme-gray-200 ml-2 flex aspect-square w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-theme-gray-300">
          <RemoveIcon />
        </span>
      </button>
      <DeleteShelfDialog
        isOpen={dialogOpen}
        shelfTitle="Postmodern Picks"
        closeDialog={toggleDialogOpen}
        deleteShelf={deleteShelf}
      />
    </>
  )
}

export default DeleteShelfDialogButton
