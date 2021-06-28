import "./about.scss";
import React from 'react';

export default function About() {
  return (
    <div className='about' id='about'>
      <h1>About Me</h1>
      <div className="container">
        <div className="left">
          <img src="assets/me.jpg" alt="author" />
        </div>
        <div className="right">
          <p className='first-p'>I am Mayur Patel. I was born in Mumbai, India, known as the “City of Dreams.”  I completed my education in Rajasthan, India, which translates to “Land of Kings.” </p>
          <p>While growing up, I was not exposed to technology in general, no mobile phones or laptops, but I had access to video games. However, it was only for three months of the year.  From playing games whenever I could to being curious about how games were made, I have come a long way from not using mobile phones to computer coding. </p>
          <p>While I am not coding, I am cooking. I love cooking, and I like to think that I am a good cook. I work as a part-time cook in a restaurant. Someday, I want to be a red seal chef. I don’t wish to cook for a living because I don’t want to turn my passion into a routine. So I decided to do something else I love and could do for a routine, programming. </p>
        </div>
      </div>
    </div>
  )
}
