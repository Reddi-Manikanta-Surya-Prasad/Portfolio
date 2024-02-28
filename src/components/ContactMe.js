import React from 'react';
import './ContactMe.css';
import gmailIcon from './imagesForContact/gmail.png';
import twitterIcon from './imagesForContact/twitter.png';
import whatsappIcon from './imagesForContact/whatsapp.png';

const ContactMe = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below!</p>
      <div className="contact__container" data-aos="fade-up">
        <div>
        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
            <img src={gmailIcon} alt="Gmail Icon" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/Reddi8Mani" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
        </div>
        <div>
          <a href="https://wa.me/+918106086474" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp Icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
