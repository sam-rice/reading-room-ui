"use client"

import { FC, ReactNode } from "react"
import Modal from "react-modal"

interface DialogContainerProps {
  isOpen: boolean
  children: ReactNode
  closeDialog: () => void
}

const DialogContainer: FC<DialogContainerProps> = ({
  isOpen,
  children,
  closeDialog,
}) => {
  Modal.setAppElement("body")

  return (
    <Modal
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
    >
      <button className="absolute right-2 top-2" onClick={closeDialog}>
        close
      </button>
      {children}
    </Modal>
  )
}

export default DialogContainer
