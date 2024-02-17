import { FC } from "react"
import DialogContainer from "./DialogContainer"

interface NewShelfDialogProps {
  isOpen: boolean
  closeModal: () => void
}

const NewShelfDialog: FC<NewShelfDialogProps> = ({ isOpen, closeModal }) => {
  return (
    <DialogContainer isOpen={isOpen} closeModal={closeModal}>
      <p>test here</p>
    </DialogContainer>
  )
}

export default NewShelfDialog
