import { FC } from "react"
import { Button } from "../Button"
import DialogContainer from "../DialogContainer"

interface DeleteShelfDialogProps {
  isOpen: boolean
  shelfTitle: string
  closeDialog: () => void
  deleteShelf: () => void
}

const DeleteShelfDialog: FC<DeleteShelfDialogProps> = ({
  isOpen,
  shelfTitle,
  closeDialog,
  deleteShelf,
}) => {
  const handleDelete = () => {
    deleteShelf()
    closeDialog()
  }

  return (
    <DialogContainer isOpen={isOpen} closeDialog={closeDialog}>
      <h1 className="my-9 text-2xl">
        Are you sure you want to delete your shelf, {shelfTitle}?
      </h1>
      <div className="my-2">
        <Button className="mr-2" onClick={handleDelete}>
          Delete
        </Button>
        <Button onClick={closeDialog} variant="light">
          Cancel
        </Button>
      </div>
    </DialogContainer>
  )
}

export default DeleteShelfDialog
