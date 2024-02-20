import PageContainer from "@/components/PageContainer"
import { FC } from "react"
import author from "@/placeholder-data/authorDetails.json"
import Image from "next/image"
import fallbackCover from "@/public/images/fallback-cover.png"
import { IAuthorBook } from "@/interfaces/entities"
import Pager from "@/components/Pager"
import BookTile from "@/components/BookTile"

interface AuthorDetailsPageProps {
  params: {
    libraryKey: string
  }
}

const AuthorDetailsPage: FC<AuthorDetailsPageProps> = ({ params }) => {

  const bookTiles = author.books.map((b: IAuthorBook) => {
    return (
      <BookTile
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
      <div className="">
        <h2>{author.name}'s books:</h2>
        <ul>{bookTiles}</ul>
        <Pager />
      </div>
    </PageContainer>
  )
}

export default AuthorDetailsPage
