import "./Timeline.css"
import Suggestions from "./Suggestions/Suggestions"
import Post from "./Posts/Post"
import { useEffect, useState } from 'react';
import { getPosts } from "../../api/post";
import { isAxiosError } from "axios";
import { PostInstance } from "../../interface/post.interface";

function Timeline() {
  const [posts, setPosts] = useState([])
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchPostsData() {
      try {
        const res = await getPosts();
        if (res.status === 200) {
          console.log(res.data.data.findPosts)
          setPosts(res.data.data.findPosts);
        }
      } catch (error) {
        if (isAxiosError(error)) {
          console.error(error);
        } else {
          console.error(error);
        }
      }
    }
    fetchPostsData();
  }, [])

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts && posts.map((post: PostInstance) => {
            return <Post author={post.author} image={post.image} likers={post.likers} text={post.text} replies={post.replies} createdAt={post.createdAt} isLiked={post.isLiked} setShowModal={setShowModal}/>
          })}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>

    </div>
  )
}

export default Timeline
