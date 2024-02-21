import PageContainer from "@/components/PageContainer"
import { FC } from "react"
import book from "@/placeholder-data/bookDetails.json"
import Image from "next/image"
import fallbackCover from "@/public/images/fallback-cover.png"
import { IAuthorBasic } from "@/interfaces/browseDtos"
import AddToShelfControls from "@/components/single-use/AddToShelfControls"
import EntityLink from "@/components/EntityLink"

interface BookDetailsPageProps {
  params: {
    libraryKey: string
  }
}

const BookDetailsPage: FC<BookDetailsPageProps> = ({ params }) => {
  const authors = book.authors.map((a: IAuthorBasic, idx: number) => {
    const name =
      book.authors.length > 1 && book.authors.length !== idx + 1
        ? a.name + ", "
        : a.name

    return (
      <EntityLink
        className="text-theme-gray-400 underline"
        libraryKey={a.libraryKey}
        title={name}
        variant="author"
        isSubHeader
      />
    )
  })

  return (
    <PageContainer className="max-w-5xl">
      <div className="mt-20 flex">
        {book.coverUrl ? (
          <img
            className="mr-14 h-[450px]"
            alt={`cover for ${book.title}`}
            src={book.coverUrl}
          />
        ) : (
          <Image
            className="mr-14"
            alt="book cover not available"
            src={fallbackCover}
            width={295}
          />
        )}
        <div>
          <div className="text-theme-gray-500 mb-5 flex h-8 w-fit items-center bg-theme-beige-400 px-2 italic">
            This book is saved on your shelf "Postmodern Picks"
          </div>
          <h1 className="mb-1 text-3xl">{book.title}</h1>
          <div>{authors}</div>
          <table className="mt-6 border-separate border-spacing-5">
            <tbody>
              <tr>
                <td className="w-24" align="right">
                  publish date:
                </td>
                <td>{book.publishDate}</td>
              </tr>
              <tr>
                <td align="right">description:</td>
                <td>{book.description}</td>
              </tr>
              <tr>
                <td align="right">tags:</td>
                <td>{book.subjects.join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AddToShelfControls libraryKey={params.libraryKey} />
    </PageContainer>
  )
}

export default BookDetailsPage
