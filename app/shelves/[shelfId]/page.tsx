"use client"

import { Input } from "@/components/Input"
import PageContainer from "@/components/PageContainer"
import Pager from "@/components/Pager"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import RemoveIcon from "@mui/icons-material/Remove"
import Link from "next/link"
import { FC, useState } from "react"
import books from "../../../placeholder-data/savedBooks.json"
import { ISavedBook } from "@/interfaces/entities"
import SavedBookTile from "@/components/SavedBookTile"

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

  const navigateToBook = (apiKey: string) => console.log(`go here: ${apiKey}`)

  const bookTiles = books.map((b: ISavedBook) => (
    <SavedBookTile
      key={b.bookId}
      bookId={b.bookId}
      apiKey={b.key}
      title={b.title}
      authors={b.authors.map((a) => a.name)}
      coverUrl={b.coverUrl}
      userNote={b.userNote}
      navigateToBook={navigateToBook}
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
              <div>
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
          <Input
            className="mt-3 w-72"
            value={filterValue}
            name="search-shelf"
            label="Search shelf"
            onChange={setFilterValue}
            onKeyDown={onFilterKeyDown}
          />
        </div>
        <ul className="mb-14 grid grid-cols-2 gap-8">{bookTiles}</ul>
      </PageContainer>
      <Pager />
    </>
  )
}

export default ShelfDetailsPage
