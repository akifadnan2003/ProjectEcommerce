import React, { useState } from 'react';
import './CSS/ContactUs.css';
import axios from 'axios';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post('http://localhost:4000/api/contactUs', {
                name,
                email,
                message
            });

            if (response.status === 200) {
                setName('');
                setEmail('');
                setMessage('');
                setSuccessMessage('Your message has been sent successfully!');
            } else {
                setErrorMessage('Something went wrong. Please try again.');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Something went wrong. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label htmlFor="email">
                    Email:
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label htmlFor="message">
                    Message:
                    <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                </label>
                <input type="submit" value="Submit" style={{ opacity: isSubmitting ? 0.5 : 1 }} />
            </form>
            {successMessage && <h2 style={{ color: 'green', background: 'white', marginTop: '1rem', padding: '.75rem', borderRadius: '1rem' }}>{successMessage}</h2>}
            {errorMessage && <h2 style={{ color: 'red', background: 'white', marginTop: '1rem', padding: '.75rem', borderRadius: '1rem' }}>{errorMessage}</h2>}
        </div>
    );
}

export default ContactUs;