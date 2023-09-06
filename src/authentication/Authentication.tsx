import './Authentication.css'
import Login from './Login'
import Signup from './Signup'
import { useState } from 'react';

function Authentication() {
  const [active, setActive] = useState("login")
  const handleChange = () => {
    setActive(active === 'login' ? 'signup' : 'login')
  }
  return (
    <div className='authentication'>
        {active === 'login' ? <Login /> : <Signup />}
        <div className="auth__more">
          <span>
          {active === "login" ? (<> Don't have an account? <button onClick={handleChange}>Sign up</button></>)
          : 
            (<>Have an account? <button onClick={handleChange}>Login in</button></>) }
          </span>
        </div>
    </div>
  )
}

export default Authentication
