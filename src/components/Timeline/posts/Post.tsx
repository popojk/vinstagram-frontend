import "./Post.css"
import { useState } from "react";
import { Avatar } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import PostModal from "../PostModal/PostModal";

type PostProps = {
  user: string,
  postImage: string,
  like: number,
  timestamp: string,
  message: string,
  replyAmount: number
  setShowModal: Function
}

function Post({ user, postImage, like, timestamp, message, replyAmount, setShowModal }: PostProps) {

  const [readMore, setReadMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ariaLabel = { 'aria-label': 'description' };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar className='avatar'>{user.charAt(0)}</Avatar>
          {user} • <span>{timestamp}</span>
        </div>
        {/* <MoreHorizIcon /> */}
      </div>
      <div className="post__image">
        <img src={postImage} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconMain">
            <FavoriteBorderIcon className="postIcon" />
            <PostModal postImage={postImage} user={user} timestamp={timestamp} like={like} message={message}/>
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        <div className="post__footerLikes">
          {like}個讚
        </div>
        <div className="post__footerMessage">
          <span>{user}</span>
          {message.length >= 24 && readMore === false ? (
            <span>
              {message.slice(0, 24)}...
              <button className='readMore__button' onClick={() => setReadMore(!readMore)}>更多</button>
            </span>)
            : message}
        </div>
        {replyAmount > 0 && (
          <div className="post__footerReply">
            查看全部{replyAmount}則留言
          </div>
        )}
        <div>
          <Box
            component="form"
            sx={{
              '& > :not(style)': {
                mt: 1,
                ml: 0,
                width: '59ch',
                input: { color: 'white' },
                label: { color: 'gray' },
              },
            }}
            noValidate
            autoComplete="off"
          >
            <Input placeholder="留言" />
          </Box>
        </div>
      </div>
      <div>
      </div>

    </div>

  )
}

export default Post
