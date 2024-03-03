"use client"

import classNames from "classnames"
import { FC, KeyboardEvent } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { twMerge } from "tailwind-merge"

interface IShelfHeadingFields {
  title: string
  description: string
}

interface ShelfHeadingInputsProps {
  title: string
  description: string
  updateShelf: (title: string, description: string) => void
}

const ShelfHeadingInputs: FC<ShelfHeadingInputsProps> = ({
  title,
  description,
  updateShelf,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IShelfHeadingFields>({
    defaultValues: {
      title: title,
      description: description,
    },
  })
  const watchTitleValue = watch("title")
  const watchDescriptionValue = watch("description")

  const titleButtonVisible = watchTitleValue !== title
  const descriptionButtonVisible = watchDescriptionValue !== description

  const onTitleUpdate: SubmitHandler<IShelfHeadingFields> = (data) => {
    updateShelf(data.title, description)
  }

  const onDescriptionUpdate: SubmitHandler<IShelfHeadingFields> = (data) => {
    updateShelf(title, data.description)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!(e.target instanceof Element)) return
    const targetId = e.target.getAttribute("id")
    const isEnterKey = e.key === "Enter"
    if (targetId === "shelf-title" && isEnterKey) handleSubmit(onTitleUpdate)()
    if (targetId === "shelf-description" && isEnterKey)
      handleSubmit(onDescriptionUpdate)()
  }

  return (
    <div className="w-1/2">
      <div className="relative mb-1 w-full">
        <input
          className={twMerge(
            "mr-4 w-full rounded-theme-small px-2 py-2 text-2xl hover:bg-theme-gray-50",
            classNames({ "pr-14": titleButtonVisible }),
          )}
          id="shelf-title"
          {...register("title", {
            required: true,
            maxLength: 40,
          })}
          onKeyDown={handleKeyDown}
          role="heading"
          aria-level={1}
          aria-label="shelf title"
        />
        {titleButtonVisible && (
          <button
            className="absolute right-[2px] top-[2px] h-[43px] w-12 rounded-theme-small text-black hover:underline"
            onClick={handleSubmit(onTitleUpdate)}
          >
            save
          </button>
        )}
        <div className="text-red-500">
          {errors.title?.type === "maxLength" &&
            "* name cannot exceed 40 characters"}
          {errors.title?.type === "required" && "* shelf must be have a name"}
        </div>
      </div>
      <div className="relative block w-full text-sm italic text-theme-gray-400">
        <input
          className={twMerge(
            "w-full rounded-theme-small px-2 py-1 text-base italic hover:bg-theme-gray-50",
            classNames({ "pr-14": descriptionButtonVisible }),
          )}
          onKeyDown={handleKeyDown}
          id="shelf-description"
          {...register("description", {
            maxLength: 150,
          })}
          placeholder={!description ? "shelf description..." : undefined}
          aria-label="shelf description"
        />
        {descriptionButtonVisible && (
          <button
            className="absolute right-[2px] top-[2px] h-[30px] w-12 rounded-theme-small text-black hover:underline"
            onClick={handleSubmit(onDescriptionUpdate)}
          >
            save
          </button>
        )}
        <div className="text-red-500">
          {errors.description?.type === "maxLength" &&
            "* description cannot exceed 150 characters"}
        </div>
      </div>
    </div>
  )
}

export default ShelfHeadingInputs
