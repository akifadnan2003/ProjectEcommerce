import React from 'react';
import './CSS/ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default ContactUs;