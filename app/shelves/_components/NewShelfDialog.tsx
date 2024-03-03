"use client"

import { createNewShelf } from "@/actions/persistence"
import { FC, useState } from "react"
import Button from "@/components/Button"
import DialogContainer from "@/components/DialogContainer"
import Input from "@/components/Input"
import { useRouter } from "next/navigation"
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
    handleSubmit,
    formState: { errors },
  } = useForm<INewShelfFields>({
    defaultValues: {
      "shelf name": "",
      description: "",
    },
  })
  const router = useRouter()

  const onKeyDown = (key: string) => {
    if (key === "Enter") handleSubmit(submitShelf)
  }

  // const clearFields = () => {
  //   setShelfName("")
  //   setDescription("")
  // }

  const submitShelf: SubmitHandler<INewShelfFields> = async (data) => {
    // clearFields()
    try {
      const newShelf = await createNewShelf(data["shelf name"], data.description)
      router.push(`/shelves/${newShelf.shelfId}`)
      closeDialog()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DialogContainer isOpen={isOpen} closeDialog={closeDialog}>
      <h1 className="text-2xl mt-5 mb-7">Add New Shelf</h1>
      <div className="mb-4 w-2/3">
        <Input
          label="shelf name"
          onKeyDown={onKeyDown}
          register={register}
          registerOptions={{
            required: "required",
            maxLength: 40 || "40 characters max"
          }}
          error={errors["shelf name"]}
        />
        <Input
          label="description"
          onKeyDown={onKeyDown}
          register={register}
          registerOptions={{
            required: "required",
            maxLength: 150 || "150 characters max"
          }}
          error={errors.description}
        />
      </div>
      <Button className="mb-2" onClick={handleSubmit(submitShelf)}>
        create
      </Button>
      <button className="underline" onClick={closeDialog}>
        cancel
      </button>
    </DialogContainer>
  )
}

export default NewShelfDialog
