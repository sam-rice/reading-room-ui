import { getEntityDetails } from "@/actions/browse"
import BookTile from "@/components/BookTile"
import PageContainer from "@/components/PageContainer"
import PageableList from "@/components/PageableList"
import { IAuthorBook, IAuthorDetails } from "@/interfaces/browseDtos"
import fallbackCover from "@/public/images/fallback-cover.png"
import Image from "next/image"
import { FC } from "react"

interface AuthorDetailsPageProps {
  params: {
    libraryKey: string
  }
}

const AuthorDetailsPage: FC<AuthorDetailsPageProps> = async ({ params }) => {
  const author = await getEntityDetails<IAuthorDetails>(
    params.libraryKey,
    "authors",
  )

  const bookTiles = author.books.map((b: IAuthorBook) => {
    return (
      <BookTile
        key={b.libraryKey}
        libraryKey={b.libraryKey}
        title={b.title}
        author={b.primaryAuthor}
        hasMultipleAuthors={b.byMultipleAuthors}
        subjects={b.subjects}
        publishDate={b.publishDate}
        coverUrl={b.coverUrl}
      />
    )
  })

  const listHeadingNode = (
    <h2 className="mb-1 text-lg">Books by {author.name}:</h2>
  )

  return (
    <PageContainer className="max-w-5xl">
      <div className="mt-20 flex">
        {author.photoUrl ? (
          <img
            className="mr-14 h-[450px]"
            alt={`photo of ${author.name}`}
            src={author.photoUrl}
          />
        ) : (
          <Image
            className="mr-14"
            alt="author image not available"
            src={fallbackCover}
            width={295}
          />
        )}
        <div>
          <h1 className="mb-1 text-3xl">{author.name}</h1>
          <div className="italic text-theme-gray-400">
            {author.birthDate} — {author.deathDate}
          </div>
          {author.bio && <p className="mt-10">{author.bio}</p>}
        </div>
      </div>
      <PageableList
        outerClassName="mt-8"
        headingNode={listHeadingNode}
        itemsPerPage={30}
      >
        {bookTiles}
      </PageableList>
    </PageContainer>
  )
}

export default AuthorDetailsPage
