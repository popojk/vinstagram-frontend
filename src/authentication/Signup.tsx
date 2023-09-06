import * as React from 'react'
import './Signup.css';
import { useState } from 'react';

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='signup'>
      <img src="https://i.imgur.com/jWnHAAy.png" alt="" />
      <input 
      onChange={e => setName(e.target.value)}
      type="text" 
      placeholder="name" 
      value={name}
      />
      <input 
      onChange={e => setUsername(e.target.value)}
      type="text" 
      placeholder="username" 
      value={username}
      />
      <input 
      onChange={e => setPassword(e.target.value)}
      type="password" 
      placeholder="Password" 
      value={password}
      />
      <button >Sign Up</button>
    </div>
  )
}

export default Signup
