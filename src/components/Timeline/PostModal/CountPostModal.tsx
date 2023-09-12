import * as React from 'react';
import { ChangeEvent, ReactNode } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './PostModal.css'
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Input from '@mui/material/Input';
import Reply from './Reply/Reply';
import { PostInstance, ReplyInstance } from '../../../interface/post.interface';
import { pink } from '@mui/material/colors';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 450,
  bgcolor: '#111111',
  border: '2px solid #000',
  boxShadow: 24,
  p: 0,
};

interface PostModalProps extends PostInstance {
  likesCount: number,
  likeStatus: boolean,
  setLikesCount: any,
  setLikeStatus: any,
  handlelike: any,
  reply: string,
  setReply: any,
  handleReplySubmit: any
}

export default function CountPostModal({ _id, image, author, createdAt, likers, isLiked, text, replies, likesCount, likeStatus, setLikesCount, setLikeStatus, handlelike, reply, setReply, handleReplySubmit }: PostModalProps ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <span>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <div className="post__footerReply" onClick={handleOpen}>
        查看全部{replies.length}則留言
      </div>
      {/* <ChatBubbleOutlineIcon className="postIcon" onClick={handleOpen} */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='postModal__box'>
          <div className="postModal__photo">
            <img src={image} alt='' />
          </div>
          <div className="postModel__right">
            <div className="postModel__header">
              <div className="post__headerAuthor">
                <Avatar className='avatar' src={author.avatar} />
                {author.name} • <span>{createdAt}</span>
              </div>
            </div>
            <div className="postModel__body">
              <div className="postModal__message">
                {text}
              </div>
              {replies!.length > 0 && replies?.map((reply: ReplyInstance) => {
                return <Reply post_id={_id} author={reply.author} text={reply.text} isLiked={reply.isLiked} _id={reply._id}/>
              })}
              
            </div>
            <div className="postModel__footer">
              <div className="postModel__footerIcons">
                <div className="postModel__iconMain" onClick={(e: any) => handlelike(_id)}>
                  {likeStatus ?
                    <FavoriteIcon className="postIcon" sx={{ color: pink[500] }} />

                    :
                    <FavoriteBorderIcon className="postIcon" />}
                </div>
                <div className="postModel__iconSave">
                  <BookmarkBorderIcon className="postIcon" />
                </div>
              </div>
              <div className="postModal__footerLikes">
                {likesCount}個讚
              </div>
              <div>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': {
                      mt: 1,
                      ml: 0.5,
                      width: '390px',
                      input: { color: 'white' },
                      label: { color: 'gray' },
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Input placeholder="留言" 
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setReply(event.target.value)}
                    value={reply}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        handleReplySubmit(_id, reply)
                      }
                    }}
                  />
                </Box>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </span>
  );
}