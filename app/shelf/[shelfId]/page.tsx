"use client"

import { Input } from "@/components/Input"
import PageContainer from "@/components/PageContainer"
import PageableList from "@/components/PageableList"
import Pager from "@/components/Pager"
import SavedBookTile from "@/components/SavedBookTile"
import DeleteShelfDialog from "@/components/single-use/DeleteShelfDialog"
import { ISavedBook } from "@/interfaces/persistenceDtos"
import { Search } from "@mui/icons-material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import RemoveIcon from "@mui/icons-material/Remove"
import Link from "next/link"
import { FC, useState } from "react"
import books from "../../../placeholder-data/savedBooks.json"

interface ShelfDetailsPageProps {
  params: {
    shelfId: string
  }
}

const ShelfDetailsPage: FC<ShelfDetailsPageProps> = ({ params }) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [filterValue, setFilterValue] = useState("")

  const toggleDialogOpen = () => setDialogOpen(!dialogOpen)

  const onFilterKeyDown = (key: string) => {
    if (key === "Enter") filterBooks()
  }

  const filterBooks = () => console.log("filtering")

  const deleteShelf = () => console.log(`deleting shelf #${params.shelfId}`)

  const bookTiles = books.map((b: ISavedBook) => (
    <SavedBookTile
      key={b.bookId}
      bookId={b.bookId}
      libraryKey={b.libraryKey}
      title={b.title}
      authors={b.authors}
      coverUrl={b.coverUrl}
      userNote={b.userNote}
    />
  ))

  return (
    <>
      <PageContainer>
        <Link className="my-6 w-fit" href={"/"}>
          <ArrowBackIcon className="text-4xl" />
        </Link>
        <div className="mb-8 w-full">
          <div className="flex w-full items-end justify-between">
            <div>
              <div className="flex items-baseline">
                <h1 className="mr-4 text-2xl">Postmodern Picks</h1>
                <span className="text-sm italic text-theme-gray-300">{`(13 books)`}</span>
              </div>
              <div className="text-theme-gray-300">
                Pynchon, Delillo, and others. A revolving list.
              </div>
            </div>
            <button className="flex items-center" onClick={toggleDialogOpen}>
              delete shelf{" "}
              <span className="bg-theme-gray-200 ml-2 flex aspect-square w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-theme-gray-300">
                <RemoveIcon />
              </span>
            </button>
          </div>
          <div className="relative mt-3 w-72">
            <Input
              value={filterValue}
              name="search-shelf"
              label="Search shelf"
              onChange={setFilterValue}
              onKeyDown={onFilterKeyDown}
            />
            <button
              className="absolute right-[7px] top-[33px]"
              onClick={filterBooks}
            >
              <Search className="hover:text-theme-gray-500 text-theme-gray-400 transition-colors" />
            </button>
          </div>
        </div>
        <PageableList itemsPerPage={50}>{bookTiles}</PageableList>
      </PageContainer>
      <DeleteShelfDialog
        isOpen={dialogOpen}
        shelfTitle="Postmodern Picks"
        closeDialog={toggleDialogOpen}
        deleteShelf={deleteShelf}
      />
    </>
  )
}

export default ShelfDetailsPage
