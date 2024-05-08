import React from 'react'
import './CSS/LoginSignup.css'
const Login = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Dont't have an account? <button><a href="./LoginSignup">Register here</a></button></p>
      </div>
    </div>
  )
}
export default Login
