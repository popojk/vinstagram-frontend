import './Reply.css'
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Author } from '../../../../interface/post.interface';
import { useState } from 'react';
import { pink } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { likeReply, unlikeReply } from '../../../../api/post';

type ReplyProps = {
  _id: string,
  author: Author,
  text: string,
  isLiked: boolean,
  post_id: string
}

function Reply({ _id, author, text, isLiked, post_id }: ReplyProps) {
  const [likeStatus, setLikeStatus] = useState(isLiked)

  async function handlelike(_id?: string) {
    if (likeStatus) {
      await unlikeReply(post_id, _id);
      setLikeStatus(false);
    } else {
      await likeReply(post_id, _id);
      setLikeStatus(true);
    }
  }

  return (
    <div className='reply'>
      <div className="reply__usernames">
        <div className="reply__username">
          <div className="reply__left">
            <span className="avatar">
              <Avatar src={author.avatar} />
            </span>
            <div className="reply__info">
              <span className="username">{author.name}</span>
              <span className="message">{text}</span>
            </div>
          </div>
          <div onClick={(e: any) => handlelike(_id)}>
          {likeStatus ?
            <FavoriteIcon className="likeIcon" sx={{ color: pink[500], fontSize: 15 }} />
            :
            <FavoriteBorderIcon className="likeIcon" sx={{ fontSize: 15 }} /> }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Reply
