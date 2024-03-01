import { getBookSearchResults } from "@/actions/browse"
import BookTile from "@/components/BookTile"
import PageableList from "@/components/PageableList"
import { IBookSearchResult } from "@/interfaces/browseDtos"
import { FC } from "react"

interface BookResultsProps {
  query: string
}

const BookResults: FC<BookResultsProps> = async ({ query }) => {
  const results = await getBookSearchResults(query)

  const searchSummary = (
    <div className="text-theme-gray-400">{`${results.length} book results for "${query}"`}</div>
  )

  const resultTiles = results.map((b: IBookSearchResult) => (
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
    <PageableList
      listClassName="grid-cols-1"
      headingNode={searchSummary}
      itemsPerPage={50}
    >
      {resultTiles}
    </PageableList>
  )
}

export default BookResults
