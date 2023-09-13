import "./Post.css"
import { ChangeEvent, useState } from "react";
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
import { unlikePost, likePost, createReply } from "../../../api/post";
import IconButton from '@mui/material/IconButton';
import CountPostModal from "../PostModal/CountPostModal";


function Post({ _id, author, image, likers, text, replies, createdAt, isLiked, setShowModal }: PostInstance) {

  const [readMore, setReadMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [likeStatus, setLikeStatus] = useState(isLiked);
  const [likesCount, setLikesCount] = useState(likers!.length);
  const [repliesCount, setRepliesCount] = useState(replies!.length);
  const [reply, setReply] = useState('');
  const ariaLabel = { 'aria-label': 'description' };

  async function handlelike(_id?: string) {
    if (likeStatus) {
      await unlikePost(_id);
      setLikeStatus(false);
      setLikesCount(likesCount - 1)
    } else {
      await likePost(_id);
      setLikeStatus(true);
      setLikesCount(likesCount + 1)
    }
  }

  async function handleReplySubmit(_id?: string, reply: string) {
    await createReply(_id, reply)
  }

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
          <div className="post__iconMain" onClick={(e:any) => handlelike(_id)}>
            {likeStatus ?
              <FavoriteIcon className="postIcon" sx={{ color: pink[500] }} />
              :
              <FavoriteBorderIcon className="postIcon" />}
            <PostModal _id={_id} image={image} author={author} createdAt={createdAt} likers={likers} isLiked={isLiked} text={text} replies={replies} likesCount={likesCount} likeStatus={likeStatus} setLikesCount={setLikesCount} setLikeStatus={setLikeStatus} handlelike={handlelike} reply={reply} setReply={setReply} handleReplySubmit={handleReplySubmit} />
          </div>
          {/* <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
            </div> */}
        </div>
        <div className="post__footerLikes">
          {likesCount}個讚
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
        {replies.length > 0 && 
          <CountPostModal _id={_id} image={image} author={author} createdAt={createdAt} likers={likers} isLiked={isLiked} text={text} replies={replies} likesCount={likesCount} likeStatus={likeStatus} setLikesCount={setLikesCount} setLikeStatus={setLikeStatus} handlelike={handlelike} reply={reply} setReply={setReply} handleReplySubmit={handleReplySubmit} />
        }
        <div>
          <Box
            component="form"
            sx={{
              '& > :not(style)': {
                mt: 1,
                ml: 0.4,
                width: '59ch',
                input: { color: 'white' },
                label: { color: 'gray' },
              },
            }}
            noValidate
            autoComplete="off"
          >
            <Input 
            placeholder="留言" 
            onChange={(event: ChangeEvent<HTMLInputElement>) => setReply(event.target.value)} 
            value={reply}
              onKeyPress={(event) => {
                if (event.key === 'Enter'){
                  handleReplySubmit(_id, reply)
                }
              }}
            />
          </Box>
        </div>
      </div>
      <div>
      </div>

    </div>

  )
}

export default Post
