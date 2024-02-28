"use client"

import { createNewShelf } from "@/actions/persistence"
import { FC, useState } from "react"
import Button from "@/components/Button"
import DialogContainer from "@/components/DialogContainer"
import Input from "@/components/Input"
import { useRouter } from "next/navigation"

interface NewShelfDialogProps {
  isOpen: boolean
  closeDialog: () => void
}

const NewShelfDialog: FC<NewShelfDialogProps> = ({ isOpen, closeDialog }) => {
  const router = useRouter()
  const [shelfName, setShelfName] = useState("")
  const [description, setDescription] = useState("")

  const onKeyDown = (key: string) => {
    if (key === "Enter") submitShelf()
  }

  const clearFields = () => {
    setShelfName("")
    setDescription("")
  }

  const submitShelf = async () => {
    clearFields()
    try {
      const newShelf = await createNewShelf(shelfName, description)
      router.push(`/shelves/${newShelf.shelfId}`)
      closeDialog()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DialogContainer isOpen={isOpen} closeDialog={closeDialog}>
      <h1 className="text-2xl mt-5 mb-7">Add New Shelf</h1>
      <div className="mb-9 w-2/3">
        <Input
          className="mb-3"
          value={shelfName}
          name="shelf-name"
          label="Shelf name"
          onChange={setShelfName}
          onKeyDown={onKeyDown}
        />
        <Input
          value={description}
          name="description"
          label="Description"
          onChange={setDescription}
          onKeyDown={onKeyDown}
        />
      </div>
      <Button className="mb-2" onClick={submitShelf}>
        create
      </Button>
      <button className="underline" onClick={closeDialog}>
        cancel
      </button>
    </DialogContainer>
  )
}

export default NewShelfDialog
