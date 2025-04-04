// src/pages/ContactPage.js
import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('Please fill in all fields');
      return;
    }
    // Handle form submission (e.g., send an email or store in database)
    alert('Message sent!');
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
