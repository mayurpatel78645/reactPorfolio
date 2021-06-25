import './contact.scss';

export default function Contact() {

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/contactRemove.png" alt="contact" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form  name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name='form-name' value="contact" />
          <input name='email' type="email" required placeholder='Email' />
          <textarea name='message' placeholder='Message'></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}
