import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // New state variable

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true when the request starts
    const data = { name, email, password };
    try {
      const response = await axios.post('http://localhost:4000/user/register', data);
      if (response.data.success === true) {
        setSuccessMessage('Registration successful!');
        setName('');
        setEmail('');
        setPassword('');
        setIsChecked(false);
      }
      setErrorMessage(null);
    } catch (error) {
      setSuccessMessage(null);
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('An error occurred while trying to register. Please try again.');
      }
    } finally {
      setIsLoading(false); // Set isLoading to false when the request is finished
    }
  };

  return (
    <form className='loginsignup' onSubmit={handleSubmit}>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        {errorMessage && <h2 className="error-message">{errorMessage}</h2>}
        {successMessage && <h2 className="success-message">{successMessage}</h2>}
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' value={name} onChange={e => setName(e.target.value)} required />
          <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit" disabled={isLoading}> {/* Disable the button while the request is in progress */}
          {isLoading ? 'Loading...' : 'Continue'} {/* Show 'Loading...' when the request is in progress */}
        </button>
        <p className="loginsignup-login">Already have an account? <span><Link to="/Login">Login here</Link></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} name='' id='' required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </form>
  );
};

export default LoginSignup;