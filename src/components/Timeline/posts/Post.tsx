import "./Post.css"
import { useState } from "react";
import { Avatar } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import PostModal from "../PostModal/PostModal";
import { PostInstance } from "../../../interface/post.interface";
import { pink } from '@mui/material/colors';



function Post({ author, image, likers, text, replies, createdAt,isLiked, setShowModal }: PostInstance) {

  const [readMore, setReadMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ariaLabel = { 'aria-label': 'description' };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar className='avatar' src={author.avatar} />
          {author.name} • <span>{createdAt}</span>
        </div>
        {/* <MoreHorizIcon /> */}
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconMain">
            {isLiked ? 
              <FavoriteIcon className="postIcon" sx={{ color: pink[500] }}/>
            : 
            <FavoriteBorderIcon className="postIcon" />}
            <PostModal image={image} author={author} createdAt={createdAt} likers={likers} isLiked={isLiked} text={text} />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        <div className="post__footerLikes">
          {likers.length}個讚
        </div>
        <div className="post__footerMessage">
          <span>{author.name}</span>
          {text.length >= 24 && readMore === false ? (
            <span>
              {text.slice(0, 24)}...
              <button className='readMore__button' onClick={() => setReadMore(!readMore)}>更多</button>
            </span>)
            : text}
        </div>
        {replies.length > 0 && (
          <div className="post__footerReply">
            查看全部{replies.length}則留言
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
