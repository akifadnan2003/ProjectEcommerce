import React, { useState } from 'react';
import axios from 'axios';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, password };
    try {
      const response = await axios.post('http://localhost:4000/user/register', data);
      // Set the success message
      if (response.data.success === true) {
        setSuccessMessage('Registration successful!');
        // Reset the form
        setName('');
        setEmail('');
        setPassword('');
        setIsChecked(false);
      }
      // Clear any previous error message
      setErrorMessage(null);
    } catch (error) {
      // Clear any previous success message
      setSuccessMessage(null);
      // Check if error.response exists before trying to access error.response.data.error
      if (error.response) {
        // Display the error message from the server
        setErrorMessage(error.response.data.error);
      } else {
        // Display a default error message
        setErrorMessage('An error occurred while trying to register. Please try again.');
      }
    }
  };


  return (
    <form className='loginsignup' onSubmit={handleSubmit}>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' value={name} onChange={e => setName(e.target.value)} required />
          <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} name='' id='' required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </form>
  );
};

export default LoginSignup;