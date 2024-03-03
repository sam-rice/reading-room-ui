"use client"

import { createNewShelf } from "@/actions/persistence"
import Button from "@/components/Button"
import DialogContainer from "@/components/DialogContainer"
import Input from "@/components/Input"
import { useRouter } from "next/navigation"
import { FC } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

interface INewShelfFields {
  "shelf name": string
  description: string
}

interface NewShelfDialogProps {
  isOpen: boolean
  closeDialog: () => void
}

const NewShelfDialog: FC<NewShelfDialogProps> = ({ isOpen, closeDialog }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<INewShelfFields>({
    defaultValues: {
      "shelf name": "",
      description: "",
    },
  })
  const router = useRouter()

  const onKeyDown = (key: string) => {
    if (key === "Enter") handleSubmit(submitShelf)()
  }

  const resetFields = () => {
    reset()
    clearErrors()
  }

  const submitShelf: SubmitHandler<INewShelfFields> = async (data) => {
    try {
      const newShelf = await createNewShelf(
        data["shelf name"],
        data.description,
      )
      router.push(`/shelves/${newShelf.shelfId}`)
      closeDialog()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DialogContainer
      id="new-shelf-dialog"
      isOpen={isOpen}
      closeDialog={closeDialog}
      onAfterClose={resetFields}
    >
      <h1 className="mb-7 mt-5 text-2xl">Add New Shelf</h1>
      <div className="mb-4 w-2/3">
        <Input
          id="shelf-name"
          label="shelf name"
          onKeyDown={onKeyDown}
          register={register}
          registerOptions={{
            required: "required",
            maxLength: 40 || "40 characters max",
          }}
          error={errors["shelf name"]}
          required
        />
        <Input
          id="shelf-description"
          label="description"
          onKeyDown={onKeyDown}
          register={register}
          registerOptions={{
            required: "required",
            maxLength: 150 || "150 characters max",
          }}
          error={errors.description}
        />
      </div>
      <Button className="mb-2" onClick={handleSubmit(submitShelf)}>
        create
      </Button>
      <button
        className="underline"
        onClick={closeDialog}
        aria-controls="new-shelf-dialog"
      >
        cancel
      </button>
    </DialogContainer>
  )
}

export default NewShelfDialog
