import './contact.scss';
import { useState } from 'react';

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    e.target[0].value = "";
    e.target[1].value = "";
  }

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/contactRemove.png" alt="contact" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form action="https://formsubmit.co/c9a78732234999ed6c301ecb969be68f" method="POST" onSubmit={handleSubmit}>
          <input name='email' type="email" required placeholder='Email' />
          <textarea name='textarea' placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thank You! Have a nice day!</span>}
        </form>
      </div>
    </div>
  )
}
