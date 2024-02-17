export interface IShelfBasic {
  shelfId: number
  userId: number
  title: string
  description: string
  totalSavedBooks: number
  featuredCoverUrl: string | null
}