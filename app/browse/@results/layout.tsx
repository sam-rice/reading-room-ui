"use client"

import BookTile from "@/components/BookTile"
import PageContainer from "@/components/PageContainer"
import PageableList from "@/components/PageableList"
import { IAuthorSearchResult, IBookSearchResult } from "@/interfaces/browseDtos"
// import results from "@/placeholder-data/bookSearchResponse.json"
import results from "@/placeholder-data/authorSearchResponse.json"
import { DM_Serif_Display } from "next/font/google"
import { useSearchParams } from "next/navigation"
import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { SearchCategory } from "../@form/page"
import AuthorTile from "./@authors/_components/AuthorTile"

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

export default function Layout({
  authors,
  books,
}: {
  authors: ReactNode
  books: ReactNode
}) {
  const searchParams = useSearchParams()

  const searchSummary = (
    <div className="text-theme-gray-400">{`${results.length} ${searchParams.get("cat") === "books" ? "book" : "author"} results for "${searchParams.get("q")}"`}</div>
  )

  // result tiles for books
  // const resultTiles = results.map((b: IBookSearchResult) => (
        // <BookTile
  //         key={b.libraryKey}
  //         libraryKey={b.libraryKey}
  //         title={b.title}
  //         author={b.authors[0]}
  //         hasMultipleAuthors={b.authors.length > 1}
  //         subjects={b.subjects}
  //         publishDate={b.publishYear}
  //         coverUrl={b.coverUrl}
  //       />
  //     ))

  //result tiles for authors
  const resultTiles = results.map((a: IAuthorSearchResult) => (
    <AuthorTile key={a.libraryKey} {...a} />
  ))

  return (
    <PageContainer className="max-w-5xl">
      <h1 className={twMerge(dmSerifDisplay.className, "mb-1 mt-16 text-3xl")}>
        BROWSE LIBRARY
      </h1>
      {searchParams.get("cat") === "authors" ? (
        authors
      ) : (
        books
      )}

      {/* <PageableList
        listClassName="grid-cols-1"
        headingNode={searchSummary}
        itemsPerPage={50}
      >
        {resultTiles}
      </PageableList> */}
    </PageContainer>
  )
}
