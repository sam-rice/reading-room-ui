import PageContainer from "@/components/PageContainer"
import { DM_Serif_Display } from "next/font/google"
import { useSearchParams } from "next/navigation"
import { FC } from "react"
import books from "@/placeholder-data/bookSearchResponse.json"
import { twMerge } from "tailwind-merge"
import PageableList from "@/components/PageableList"
import { IBookSearchResult } from "@/interfaces/browseDtos"
import BookTile from "@/components/BookTile"

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

const ResultsPage: FC = () => {
  const searchParams = useSearchParams()

  const searchSummary = (
    <div className="text-theme-gray-400">{`${books.length} ${searchParams.get("cat") === "books" ? "book" : "author"} results for "${searchParams.get("q")}"`}</div>
  )

  const bookTiles = books.map((b: IBookSearchResult) => (
    <BookTile
      key={b.libraryKey}
      libraryKey={b.libraryKey}
      title={b.title}
      author={b.authors[0]}
      hasMultipleAuthors={b.authors.length > 1}
      subjects={b.subjects}
      publishDate={b.publishYear}
      coverUrl={b.coverUrl}
    />
  ))

  return (
    <PageContainer className="max-w-5xl">
      <h1 className={twMerge(dmSerifDisplay.className, "text-3xl mt-16 mb-1")}>
        BROWSE LIBRARY
      </h1>
      <PageableList headingNode={searchSummary} itemsPerPage={50}>
        {bookTiles}
      </PageableList>
    </PageContainer>
  )
}

export default ResultsPage
