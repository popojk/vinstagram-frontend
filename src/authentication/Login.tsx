import { useState } from 'react';
import './Login.css'
import { useDispatch, useSelector } from "react-redux";
import { login } from '../features/userSlice';
import { userData } from '../features/userService';
import { AppDispatch } from '../app/store';

function Login() {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  //const dispatch = useDispatch()
  const dispatch = useDispatch<AppDispatch>();
  const handleLogin = () => {
    const data = {
      username: username,
      password: password
    }
    dispatch(login(data))
  }
  
  
  return (
    <div className='login'>
      <img src="https://i.imgur.com/jWnHAAy.png" alt=""/>
      <input 
      onChange={e => setUsername(e.target.value)} 
      type="text" 
      placeholder="Username" 
      value={username}
      />
      <input 
      onChange={e => setPassword(e.target.value)} 
      type="password" 
      placeholder="Password"
      value={password}
      />
      <button onClick={handleLogin} >Log in</button>
    </div>
  )
}

export default Login
