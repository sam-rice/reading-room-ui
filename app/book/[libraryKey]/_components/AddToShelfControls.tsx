"use client"

import Button from "@/components/Button"
import { IShelfBasic } from "@/interfaces/persistenceDtos"
import classNames from "classnames"
import { FC, useState } from "react"

interface AddToShelfControlsProps {
  availableShelves: IShelfBasic[]
  handleSubmit: (value: number) => void
}

const AddToShelfControls: FC<AddToShelfControlsProps> = ({
  availableShelves,
  handleSubmit,
}) => {
  const [value, setValue] = useState<number | "">("")

  const handleClick = () => {
    if (value) handleSubmit(value)
  }

  const shelfOptions = availableShelves.map((s: IShelfBasic) => (
    <option key={s.shelfId} value={s.shelfId}>
      {s.title}
    </option>
  ))

  return (
    <div className="my-5 flex h-28 w-[600px] items-center justify-center bg-theme-beige-400 rounded-theme-large">
      <label className="flex items-baseline mr-7">
        <span
          className={classNames({
            "text-theme-gray-300": !availableShelves.length,
          })}
        >
          Add to shelf:
        </span>
        <select
          className={classNames(
            "ml-4 h-9 max-w-64 min-w-52 rounded-theme-small px-1",
            {
              "text-theme-gray-300": !availableShelves.length,
            },
          )}
          id="add-to-shelf-select"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          disabled={!availableShelves.length}
        >
          <option className="text-theme-gray-400" value="" disabled>
            select shelf
          </option>
          {shelfOptions}
        </select>
      </label>
      <Button
        className="w-24"
        onClick={handleClick}
        disabled={!value || !availableShelves.length}
      >
        add
      </Button>
    </div>
  )
}

export default AddToShelfControls
