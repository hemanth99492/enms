import React from 'react';
import Login from './login.js';

function Contactus() {
  const supportEmail = 'support@example.com';
  const supportPhoneNumber = '+1234567890';
  const liveChatLink = 'https://example.com/live-chat';

  return (
    <div>
      <div className='navbar'>
        <Login />
      </div>
      <div className='remaining' style={{ padding: '20px' }}>
        <h1>Contact Us</h1>
        <h3>
          Thank you for your interest in HGB and our employee leave management
          application. We're here to assist you in any way we can. Please feel
          free to reach out to us using any of the methods below:
        </h3>
        <h2>Customer Support</h2>
        <h3>
          For assistance with technical issues, questions about our
          application, or help with your account, our dedicated customer
          support team is available to assist you. You can reach us via:
        </h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <h1>Email: {supportEmail}</h1>
          </li>
          <li>
            <h1>Phone: {supportPhoneNumber}</h1>
          </li>
          <li>
            <h1>Live Chat:{' '}</h1>
            <a href={liveChatLink} target='_blank' rel='noopener noreferrer'>
              Live Chat Support
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contactus;
