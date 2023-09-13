import "./Timeline.css"
import Suggestions from "./Suggestions/Suggestions"
import Post from "./Posts/Post"
import { useEffect, useState } from 'react';
import { getPosts } from "../../api/post";
import { isAxiosError } from "axios";
import { PostInstance } from "../../interface/post.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { getAllPosts } from "../../features/postSlice";

function Timeline() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const posts: any = useSelector((state: any) => state.data.post.posts)

  useEffect(() => {
    async function fetchPostsData() {
      try {
        await dispatch(getAllPosts())
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
            return <Post _id={post._id} author={post.author} image={post.image} likers={post.likers} text={post.text} replies={post.replies} createdAt={post.createdAt} isLiked={post.isLiked} setShowModal={setShowModal}/>
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
