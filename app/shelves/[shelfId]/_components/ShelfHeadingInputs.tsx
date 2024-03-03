"use client"

import classNames from "classnames"
import { FC } from "react"
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

  return (
    <div className="w-1/2">
      <div className="mb-1 relative w-full">
        <input
          className={twMerge(
            "mr-4 w-full text-2xl rounded-theme-small hover:bg-theme-gray-50 px-2 py-2",
            classNames({ "pr-14": titleButtonVisible }),
          )}
          id="shelf-title"
          {...register("title", {
            required: true,
            maxLength: 40,
          })}
          role="heading"
          aria-description="shelf title"
        />
        {titleButtonVisible && (
          <button
            className="hover:underline absolute text-black right-[2px] top-[2px] h-[43px] w-12 rounded-theme-small"
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
      <div className="text-sm italic text-theme-gray-400 block relative w-full">
        <input
          className={twMerge(
            "w-full text-base italic py-1 px-2 hover:bg-theme-gray-50 rounded-theme-small",
            classNames({ "pr-14": descriptionButtonVisible }),
          )}
          id="shelf-description"
          {...register("description", {
            maxLength: 150,
          })}
          placeholder={!description ? "shelf description..." : undefined}
          aria-labelledby="shelf-title"
        />
        {descriptionButtonVisible && (
          <button
            className="hover:underline absolute text-black right-[2px] top-[2px] h-[30px] w-12 rounded-theme-small"
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
