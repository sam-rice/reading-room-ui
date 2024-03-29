import { getEntityDetails } from "@/actions/browse"
import EntityImage from "@/components/EntityImage"
import EntityLink from "@/components/EntityLink"
import PageContainer from "@/components/PageContainer"
import { IAuthorBasic, IBookDetails } from "@/interfaces/browseDtos"
import { FC } from "react"
import AddToShelfWidget from "./_components/AddToShelfWidget"
import AssociatedShelvesMessage from "./_components/AssociatedShelvesMessage"

interface BookDetailsPageProps {
  params: {
    libraryKey: string
  }
}

const BookDetailsPage: FC<BookDetailsPageProps> = async ({ params }) => {
  const book = await getEntityDetails<IBookDetails>(params.libraryKey, "books")

  const authors = book.authors.map((a: IAuthorBasic, idx: number) => {
    const name =
      book.authors.length > 1 && book.authors.length !== idx + 1
        ? a.name + ", "
        : a.name

    return (
      <EntityLink
        key={a.libraryKey}
        className="text-theme-gray-400 underline"
        routeSegmentId={a.libraryKey}
        title={name}
        variant="author"
        isSubHeader
      />
    )
  })

  return (
    <PageContainer className="max-w-5xl">
      <div className="mb-8 mt-20 flex">
        <div className="mr-14 flex w-1/2 justify-center">
          <EntityImage
            alt={`cover for ${book.title}`}
            src={book.coverUrl}
            variant="book"
            fallbackWidth={290}
          />
        </div>
        <div className="flex w-1/2 flex-col justify-between">
          <div>
            <h1 className="mb-1 text-3xl">{book.title}</h1>
            <div>{authors}</div>
            <table className="mt-6 border-separate border-spacing-5">
              <tbody>
                {book.publishDate && (
                  <tr>
                    <td className="w-24" align="right">
                      publish date:
                    </td>
                    <td>{book.publishDate}</td>
                  </tr>
                )}
                {book.description && (
                  <tr>
                    <td align="right">description:</td>
                    <td>{book.description}</td>
                  </tr>
                )}
                {book.subjects && (
                  <tr>
                    <td align="right">tags:</td>
                    <td>{book.subjects.join(", ")}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <AssociatedShelvesMessage shelves={book.associatedShelves} />
        </div>
      </div>
      <AddToShelfWidget
        libraryKey={params.libraryKey}
        associatedShelves={book.associatedShelves}
      />
    </PageContainer>
  )
}

export default BookDetailsPage
