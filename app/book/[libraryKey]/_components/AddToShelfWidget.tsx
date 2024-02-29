import { addBookToShelf, getAllShelves } from "@/actions/persistence"
import { IAssociatedShelf } from "@/interfaces/browseDtos"
import { IShelfBasic } from "@/interfaces/persistenceDtos"
import { FC } from "react"
import AddToShelfControls from "./AddToShelfControls"

interface AddToShelfWidgetProps {
  libraryKey: string
  associatedShelves: IAssociatedShelf[]
}

const AddToShelfWidget: FC<AddToShelfWidgetProps> = async ({
  libraryKey,
  associatedShelves,
}) => {
  const allShelves = await getAllShelves()

  const handleSubmit = async (value: number) => {
    "use server"
    try {
      await addBookToShelf(value, libraryKey)
    } catch (error) {
      console.error(error)
    }
  }

  const availableShelves = allShelves.filter(
    (shelf: IShelfBasic) =>
      !associatedShelves.some(
        (associatedShelf: IAssociatedShelf) =>
          associatedShelf.shelfId === shelf.shelfId,
      ),
  )

  return (
    <AddToShelfControls
      availableShelves={availableShelves}
      handleSubmit={handleSubmit}
    />
  )
}

export default AddToShelfWidget
