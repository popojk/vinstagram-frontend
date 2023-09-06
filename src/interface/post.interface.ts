export interface Author {
  _id: string,
  name: string,
  avatar: string
}

export interface Reply {
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
  replies?: Reply[],
  createdAt?: string
  isLiked?: boolean
  setShowModal?: any
}