import { useState } from "react";
import React, { useRef } from 'react';

import "./contact.scss";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail123', 'template123', form.current, 'user_lEofgLf0GEtrlpU73pq5k')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
      
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail} action="mailto:sharath.infinitymaths@gmail.com" method='post'>
          <input type='text' placeholder='Name' name='from_name'></input>
          <input type="email" placeholder="Email" name='email'></input>
          <textarea placeholder="Message" name='message'></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
        <div class="container">
          <a href="https://www.linkedin.com/in/sharath-dinesh" class="icon">
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://www.hackerrank.com/sharath_infinit1" class="icon">
            <i class="fab fa-hackerrank fa-3x"></i>
          </a>
          <a href="https://www.github.com/Infinitymaths" class="icon">
            <i class="fab fa-github fa-3x"></i>
          </a>
          {/* <a href="/#" class="icon">
            <i class="fab fa-twitter fa-3x"></i>
          </a> */}
        </div>
      </div>
        
    </div>
  );
}
