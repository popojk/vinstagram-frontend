import './Reply.css'
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Reply() {
  return (
    <div className='reply'>
      <div className="reply__usernames">
        <div className="reply__username">
          <div className="reply__left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="reply__info">
              <span className="username">calexwu</span>
              <span className="message">留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言</span>
            </div>
          </div>
          <FavoriteBorderIcon sx={{ fontSize: 15 }} className="likeIcon" />
        </div>
      </div>
    </div>
  )
}

export default Reply
