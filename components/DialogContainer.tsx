"use client"

import { FC, ReactNode } from "react"
import Modal from "react-modal"

interface DialogContainerProps {
  id: string
  isOpen: boolean
  children: ReactNode
  closeDialog: () => void
  onAfterClose?: () => void
}

const DialogContainer: FC<DialogContainerProps> = ({
  id,
  isOpen,
  children,
  closeDialog,
  onAfterClose,
}) => {
  Modal.setAppElement("body")

  return (
    <Modal
      id={id}
      style={{
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D9D9D9E3",
        },
        content: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          width: "50%",
          maxWidth: 850,
          minWidth: 700,
          backgroundColor: "#EFE7CC",
          borderRadius: 8,
        },
      }}
      isOpen={isOpen}
      closeTimeoutMS={400}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={closeDialog}
      onAfterClose={onAfterClose}
    >
      <button
        className="absolute right-2 top-2"
        onClick={closeDialog}
        aria-label="close modal"
      >
        close
      </button>
      {children}
    </Modal>
  )
}

export default DialogContainer
