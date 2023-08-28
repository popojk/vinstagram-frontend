import "./Post.css"
import { Avatar } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

type PostProps = {
  user: string,
  postImage: string,
  like: number,
  timestamp: string
}

function Post({user, postImage, like, timestamp}: PostProps) {

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>{user.charAt(0)}</Avatar>
        {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconMain">
            <FavoriteBorderIcon className="postIcon"/>
            <ChatBubbleOutlineIcon className="postIcon"/>
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon"/>
          </div>
        </div>
        {like}個讚
      </div>
    </div>
  )
}

export default Post
