import { getPosts } from "../api/post";

//getPosts
const getAllPosts = async (): Promise<any> => {
  const response = await getPosts();
  return response.data;
}

const postService = {
  getAllPosts,
}

export default postService;