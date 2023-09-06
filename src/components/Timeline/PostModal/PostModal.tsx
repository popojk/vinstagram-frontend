import * as React from 'react';
import { ReactNode } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './PostModal.css'
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Input from '@mui/material/Input';
import Reply from './Reply/Reply';


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

interface PostModalProps {
  postImage: string,
  user: string
  timestamp: string,
  like: number,
  message: string;
}

export default function PostModal({ postImage, user, timestamp, like, message }: PostModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <span>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <ChatBubbleOutlineIcon className="postIcon" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='postModal__box'>
          <div className="postModal__photo">
            <img src={postImage} alt='' />
          </div>
          <div className="postModel__right">
            <div className="postModel__header">
              <div className="post__headerAuthor">
                <Avatar className='avatar'>{user.charAt(0)}</Avatar>
                {user} • <span>{timestamp}</span>
              </div>
            </div>
            <div className="postModel__body">
              <div className="postModal__message">
                {message}
              </div>
              <Reply />
              <Reply />
              <Reply />
            </div>
            <div className="postModel__footer">
              <div className="postModel__footerIcons">
                <div className="postModel__iconMain">
                  <FavoriteBorderIcon className="postIcon" />
                </div>
                <div className="postModel__iconSave">
                  <BookmarkBorderIcon className="postIcon" />
                </div>
              </div>
              <div className="postModal__footerLikes">
                {like}個讚
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
                  <Input placeholder="留言" />
                </Box>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </span>
  );
}
