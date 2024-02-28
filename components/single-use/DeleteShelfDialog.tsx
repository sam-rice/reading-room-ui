import { deleteShelf } from "@/actions/shelf"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { Button } from "../Button"
import DialogContainer from "../DialogContainer"

interface DeleteShelfDialogProps {
  isOpen: boolean
  shelfTitle: string
  shelfId: string
  closeDialog: () => void
}

const DeleteShelfDialog: FC<DeleteShelfDialogProps> = ({
  isOpen,
  shelfTitle,
  shelfId,
  closeDialog,
}) => {
  const router = useRouter()

  const handleDelete = async () => {
    try {
      const result = await deleteShelf(parseInt(shelfId))
      if (result.success) {
        router.replace("/shelves")
      } else {
        throw new Error("Failed to delete shelf.")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DialogContainer isOpen={isOpen} closeDialog={closeDialog}>
      <h1 className="my-9 text-2xl text-center">
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
