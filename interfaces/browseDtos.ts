
export interface IAuthorBasic {
  name: string;
  libraryKey: string;
}

export interface IAuthorDetails {
  libraryKey: string;
  name: string;
  bio: string | null;
  photoUrl: string | null;
  birthDate: string;
  deathDate: string | null;
  books: IAuthorBook[];
}

export interface IAuthorBook {
  libraryKey: string;
  title: string;
  publishDate: string;
  primaryAuthor: IAuthorBasic;
  byMultipleAuthors: boolean;
  coverUrl: string | null;
  subjects: string[] | null;
}

export interface IBookDetails {
  libraryKey: string;
  title: string;
  description: string | null;
  publishDate: string;
  authors: IAuthorBasic[];
  coverUrl: string;
  subjects: string[] | null;
}

export interface IBookSearchResult {
  libraryKey: string
  title: string
  publishYear: number
  editionCount: number
  authors: IAuthorBasic[]
  coverUrl: string | null
  subjects: string[] | null
}

export interface IAuthorSearchResult {
  libraryKey: string
  name: string
  birthDate: string | null
  deathDate: string | null
  topBook: string
  topSubjects: string[] | null
}