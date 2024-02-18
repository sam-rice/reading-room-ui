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
  key: string
  title: string
  authors: {
    name: string
    key: string
  }[]
  coverUrl: string | null
  userNote: string | null
  savedDate: number
}