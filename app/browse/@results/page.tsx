import { EntityType } from "@/actions/browse"
import BookTile from "@/components/BookTile"
import { IAuthorSearchResult, IBookSearchResult } from "@/interfaces/browseDtos"
import { FC, ReactNode } from "react"
import AuthorTile from "./_components/AuthorTile"
import Results from "./_components/Results"

interface ResultsPageProps {
  searchParams: {
    q: string
    cat: EntityType
    page: number
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
        authors={b.authors}
        subjects={b.subjects}
        publishDate={b.publishYear}
        coverUrl={b.coverUrl}
      />
    ))
  }

  return (
    <Results
      query={searchParams.q}
      category={searchParams.cat}
      pageNum={searchParams.page}
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
  )
}

export default ResultsPage
