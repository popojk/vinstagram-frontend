import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './CreatePostModal.css'
import { Avatar } from "@mui/material";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { ChangeEvent, ReactNode, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message"
import { createPost } from '../../api/post';
import { getAllPosts } from '../../features/postSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';


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

export default function CreatetPostModal() {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    setError,
    clearErrors,
    resetField,
    reset,
    watch,
  } = useForm<FieldValues>({
    values: {
      text: '',
      file: null,
    },
  });

  const [open, setOpen] = React.useState(false);
  const [{ imgSrc, imgName }, setImgInfo] = useState({
    imgSrc: '',
    imgName: ''
  });
  const [text, setText] = useState('')
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <span>
      <button className="sidenav__button" onClick={handleOpen}>
        <AddBoxOutlinedIcon />
        <span>建立</span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={
              handleSubmit(async (data) => {
                const formData = new FormData();
                for (const [key, value] of Object.entries(data)) {
                  if (key === 'file') {
                    const file = (value as FileList)[0];
                    formData.append(key, file);
                  } else {
                    formData.append(key, value);
                  }
                }
                await createPost(formData);
                await dispatch(getAllPosts())
                handleClose()
              })
            }
          >
            <div className="createPost__header">
              <span>建立新貼文</span>
              <button
                type='submit'
                className="publish__button"
              >
                發佈
              </button>
            </div>
            <div className="createPost__body">
              <div className="createPostModal__photo">
                <div className="createPostModal__photoDistribute">
                  <img
                    src={imgSrc || 'https://fakeimg.pl/320x180/?text=PICTURE'}
                    alt={imgName || '場館照片'}
                  />
                </div>
                <div className="createPostModal__photoUploadButtons">

                  <input
                    className='hidden'
                    type='file'
                    id='file'
                    accept='image/jpg, image/png, image/jpeg'
                    {...register('file', {
                      required: true,
                      validate: {
                        fileType: (value) => {
                          const file = value[0];
                          const validateFormat = ['image/jpg', 'image/png', 'image/jpeg'];
                          return validateFormat.includes(file.type);
                        },
                      },
                      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          const validateFormat = ['image/jpg', 'image/png', 'image/jpeg'];
                          if (validateFormat.includes(file.type)) {
                            setImgInfo({ imgSrc: URL.createObjectURL(file), imgName: file.name });
                            clearErrors('file');
                          } else {
                            resetField('file');
                            setError('file', { type: 'fileType', message: '不支援的圖片格式' });
                          }
                        } else {
                          resetField('file');
                          setImgInfo({ imgSrc: '', imgName: '' });
                        }
                      },
                    })}
                  />
                  <button
                    disabled={!imgSrc}
                    onClick={() => {
                      if (imgSrc) {
                        resetField('file');
                        setImgInfo({ imgSrc: '', imgName: '' });
                        setError('file', { type: 'required', message: '請選擇圖片' });
                      }
                    }}
                  >
                    清空圖
                  </button>
                </div>
              </div>
              <div className="createPostModel__right">
                <textarea
                  placeholder="撰寫說明文字......"
                  value={text}
                  {...register('text', {
                    required: true,
                    maxLength: 300,
                    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
                      const { target } = event;
                      if (target.value.length > 500) {
                        setError('text', {
                          type: 'maxLength',
                          message: '貼文不可超過 500 字元',
                        });
                      } else {
                        clearErrors('text');
                        setText(target.value);
                      }
                    },
                  })}
                />
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </span>
  );
}