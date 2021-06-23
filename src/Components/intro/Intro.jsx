import './intro.scss';
import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Hello!", "Hola!", "Bonjour!", "Nǐn hǎo!", "Salve!", "Konnichiwa!", "Guten Tag!", "Olá!", "Asalaam alaikum!", "Namaste!"],
    });
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me1.jpg" alt="author's profile" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2><span ref={textRef}></span> I'm</h2>
          <h1>Mayur Patel</h1>
          <h3>Software Developer</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  )
}
