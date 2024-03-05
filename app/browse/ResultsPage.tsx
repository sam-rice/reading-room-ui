import { EntityType } from "@/actions/browse"
import BookTile from "@/components/BookTile"
import PageContainer from "@/components/PageContainer"
import { IAuthorSearchResult, IBookSearchResult } from "@/interfaces/browseDtos"
import { DM_Serif_Display } from "next/font/google"
import { FC, ReactNode, Suspense } from "react"
import { twMerge } from "tailwind-merge"
import AuthorTile from "./_components/AuthorTile"
import Results from "./_components/ResultsList"
import LoadingSkeleton from "@/components/LoadingSkeleton"

const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

interface ResultsPageProps {
    query: string
    category: EntityType
    pageNum: number
}

const ResultsPage: FC<ResultsPageProps> = ({ query, category, pageNum }) => {
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
    <PageContainer className="max-w-5xl">
      <h1 className={twMerge(dmSerifDisplay.className, "mb-1 mt-16 text-3xl")}>
        BROWSE LIBRARY
      </h1>
      <Suspense fallback={<LoadingSkeleton />}>
        <Results
          query={query}
          category={category}
          pageNum={pageNum}
          resultsMapper={
            category === "authors"
              ? (mapToAuthorTiles as (
                  results: IAuthorSearchResult[],
                ) => ReactNode[])
              : (mapToBookTiles as (
                  results: (IAuthorSearchResult | IBookSearchResult)[],
                ) => ReactNode[])
          }
        />
      </Suspense>
    </PageContainer>
  )
}

export default ResultsPage
