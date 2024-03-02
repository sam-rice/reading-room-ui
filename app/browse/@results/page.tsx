import BookTile from "@/components/BookTile"
import PageContainer from "@/components/PageContainer"
import { IAuthorSearchResult, IBookSearchResult } from "@/interfaces/browseDtos"
import { EntityType } from "@/actions/browse"
import { DM_Serif_Display } from "next/font/google"
import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import AuthorTile from "./_components/AuthorTile"
import Results from "./_components/Results"

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

interface ResultsPageProps {
  searchParams: {
    q: string
    cat: EntityType
  }
}

const ResultsPage: FC<ResultsPageProps> = ({ searchParams }) => {
  const mapToAuthorTiles = (results: IAuthorSearchResult[]) => {
    return results.map((a: IAuthorSearchResult) => (
      <AuthorTile key={a.libraryKey} {...a} />
    ))
  }

  const mapToBookTiles = (results: IBookSearchResult[]) => {
    return results.map((b: IBookSearchResult) => (
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
  }

  return (
    <PageContainer className="max-w-5xl">
      <h1 className={twMerge(dmSerifDisplay.className, "mb-1 mt-16 text-3xl")}>
        BROWSE LIBRARY
      </h1>
      <Results
        query={searchParams.q}
        category={searchParams.cat}
        resultsMapper={
          searchParams.cat === "authors"
            ? (mapToAuthorTiles as (
                results: IAuthorSearchResult[],
              ) => ReactNode[])
            : (mapToBookTiles as (
                results: (IAuthorSearchResult | IBookSearchResult)[],
              ) => ReactNode[])
        }
      />
    </PageContainer>
  )
}

export default ResultsPage
