import { IAuthorBasic } from "./browseDtos"

export interface IShelfBasic {
  shelfId: number
  userId: number
  title: string
  description: string
  totalSavedBooks: number
  featuredCoverUrl: string | null
}

export interface ISavedBook {
  bookId: number
  shelfId: number
  userId: number
  libraryKey: string
  title: string
  authors: IAuthorBasic[]
  coverUrl: string | null
  userNote: string | null
  savedDate: number
}