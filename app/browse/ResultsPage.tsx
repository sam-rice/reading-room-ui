import PageContainer from "@/components/PageContainer"
import { DM_Serif_Display } from "next/font/google"
import { useSearchParams } from "next/navigation"
import { FC, ReactNode } from "react"
// import results from "@/placeholder-data/bookSearchResponse.json"
import results from "@/placeholder-data/authorSearchResponse.json"
import { twMerge } from "tailwind-merge"
import PageableList from "@/components/PageableList"
import { IAuthorSearchResult, IBookSearchResult } from "@/interfaces/browseDtos"
import BookTile from "@/components/BookTile"
import { SearchCategory } from "./landingPage"
import AuthorTile from "@/components/AuthorTile"

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

const ResultsPage: FC = () => {
  const searchParams = useSearchParams()

  const searchSummary = (
    <div className="text-theme-gray-400">{`${results.length} ${searchParams.get("cat") === "books" ? "book" : "author"} results for "${searchParams.get("q")}"`}</div>
  )

  // const getResultTiles: ReactNode[] = (category: SearchCategory) => {
  //   if (category === "books") {
  //     results as IBookSearchResult[]
  //     return results.map((b: IBookSearchResult) => (
  //       <BookTile
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
  //   } else {
  //     results as IAuthorSearchResult[]
  //     return results.map((a: IAuthorSearchResult) => (
  //       <AuthorTile key={a.libraryKey} {...a} />
  //     ))
  //   }
  // }

  // const resultTiles = results.map((b: IBookSearchResult) => (
  //       <BookTile
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

  const resultTiles = results.map((a: IAuthorSearchResult) => (
    <AuthorTile key={a.libraryKey} {...a} />
  ))

  return (
    <PageContainer className="max-w-5xl">
      <h1 className={twMerge(dmSerifDisplay.className, "mb-1 mt-16 text-3xl")}>
        BROWSE LIBRARY
      </h1>
      <PageableList
        listClassName="grid-cols-1"
        headingNode={searchSummary}
        itemsPerPage={50}
      >
        {/* {getResultTiles(searchParams("cat"))} */}
        {resultTiles}
      </PageableList>
    </PageContainer>
  )
}

export default ResultsPage
