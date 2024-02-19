"use client"

import { FC, useState } from "react"
import shelves from "@/placeholder-data/shelves.json"
import { IShelfBasic } from "@/interfaces/entities"
import { Button } from "../Button"

interface AddToShelfControlsProps {
  libraryKey: string
}

const AddToShelfControls: FC<AddToShelfControlsProps> = ({ libraryKey }) => {
  const [value, setValue] = useState<number | undefined>(undefined)

  const addBookToShelf = () => {
    if (!!value) {
      console.log(`adding book with key ${libraryKey} to shelf #${value}`)
    }
  }

  const shelfOptions = shelves.map((s: IShelfBasic) => (
    <option value={s.shelfId}>{s.title}</option>
  ))

  return (
    <div className="my-5 flex h-28 w-[600px] items-center justify-evenly bg-theme-beige-400">
      <label className="flex items-baseline">
        <span>Add to shelf:</span>
        <select
          className="ml-4 h-9 max-w-64 rounded-theme-small px-1"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        >
          <option className="text-theme-gray-400" value={undefined}>
            select shelf
          </option>
          {shelfOptions}
        </select>
      </label>
      <Button className="w-24" onClick={addBookToShelf} disabled={!value}>
        add
      </Button>
    </div>
  )
}

export default AddToShelfControls
