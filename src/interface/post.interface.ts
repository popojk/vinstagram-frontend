export interface Author {
  _id: string,
  name: string,
  avatar: string
}

export interface ReplyInstance {
  _id?: string,
  author: Author,
  text: string,
  likers: Author[]
  isLiked: boolean
}

export interface PostInstance {
  _id?: string,
  author?: Author,
  text?: string,
  image?: string,
  likers?: Author[],
  replies?: ReplyInstance[],
  createdAt?: string
  isLiked?: boolean
  setShowModal?: any
}