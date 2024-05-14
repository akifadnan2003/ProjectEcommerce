import React, { useState } from 'react';
import axios from 'axios';
import './CSS/LoginSignup.css';
import { redirect } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const response = await axios.post('http://localhost:4000/user/login', data, { withCredentials: true });
      if (response.data.success === true) {
        setSuccessMessage('Login successful!');
        setTimeout(() => {
          window.location = '/'; // Redirect to the home page          
        }, 1000);
      }
      setErrorMessage(null);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('An error occurred while trying to login. Please try again.');
      }
    }
  };

  return (
    <form className='loginsignup' onSubmit={handleSubmit}>
      <div className="loginsignup-container">
        <h1>Login</h1>
        {errorMessage && <h2 className="error-message">{errorMessage}</h2>}
        {successMessage && <h2 className="success-message">{successMessage}</h2>}
        <div className="loginsignup-fields">
          <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Continue</button>
        <p className="loginsignup-login">Dont't have an account? <button><a href="./LoginSignup">Register here</a></button></p>
      </div>
    </form>
  );
};

export default Login;