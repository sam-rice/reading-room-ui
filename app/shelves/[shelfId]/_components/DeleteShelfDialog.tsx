import { deleteShelf } from "@/actions/persistence"
import Button from "@/components/Button"
import DialogContainer from "@/components/DialogContainer"
import { useRouter } from "next/navigation"
import { FC } from "react"

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
    <DialogContainer
      id="delete-shelf-dialog"
      isOpen={isOpen}
      closeDialog={closeDialog}
    >
      <h1 className="my-9 text-center text-2xl">
        Are you sure you want to delete your shelf, {shelfTitle}?
      </h1>
      <div className="my-2">
        <Button className="mr-2" onClick={handleDelete}>
          Delete
        </Button>
        <Button
          onClick={closeDialog}
          variant="light"
          ariaControls="delete-shelf-dialog"
        >
          Cancel
        </Button>
      </div>
    </DialogContainer>
  )
}

export default DeleteShelfDialog
