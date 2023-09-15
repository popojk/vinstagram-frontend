import * as React from 'react'
import './Signup.css';
import { ChangeEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { createUser } from '../api/user';

type SignupProps = {
  setActive: Function
}

function Signup({ setActive }: SignupProps) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [{ imgSrc, imgName }, setImgInfo] = useState({
    imgSrc: '',
    imgName: ''
  });

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
      name: null,
      username: null,
      password: null,
      file: null,
    },
  });

  return (
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
          await createUser(formData);
          setActive('login')
        })
      }
    >
      <div className='signup'>
        <div className="signup__photo">
          <div className="signup__photoDistribute">
            <img
              className="avatar__image"
              src={imgSrc || 'https://fakeimg.pl/180x180/?text=picture'}
              alt=""
            />
          </div>
          <div className="signup__photoUploadButtons">

            <input
              className='photo__input'
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
          </div>
        </div>
        <input
          type="text"
          placeholder="請輸入暱稱"
          value={name}
          {...register('name', {
            required: true,
            maxLength: 20,
            onChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
              const { target } = event;
              if (target.value.length > 20) {
                setError('name', {
                  type: 'maxLength',
                  message: '暱稱不可超過 20 字元',
                });
              } else {
                clearErrors('name');
                setName(target.value);
              }
            },
          })}
        />
        <input
          type="text"
          placeholder="請輸入帳號"
          value={username}
          {...register('username', {
            required: true,
            maxLength: 20,
            onChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
              const { target } = event;
              if (target.value.length > 20) {
                setError('username', {
                  type: 'maxLength',
                  message: '帳號不可超過 20 字元',
                });
              } else {
                clearErrors('username');
                setUsername(target.value);
              }
            },
          })}
        />
        <input
          type="password"
          placeholder="請輸入密碼"
          value={password}
          {...register('password', {
            required: true,
            maxLength: 20,
            onChange: (event: ChangeEvent<HTMLTextAreaElement>) => {
              const { target } = event;
              if (target.value.length > 20) {
                setError('password', {
                  type: 'maxLength',
                  message: '密碼不可超過 20 字元',
                });
              } else {
                clearErrors('password');
                setPassword(target.value);
              }
            },
          })}
        />
        <button type='submit'>註冊</button>
      </div>
    </form>
  )
}

export default Signup
