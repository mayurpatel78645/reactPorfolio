import './works.scss';
import { useState } from 'react';

export default function Works() {

  const [currentSlider, setCurrentSlider] = useState(0);

  const data = [
    {
      id: 1,
      icon: "assets/budgety.png",
      title: "Budget Calculator",
      overview: "Budget Calculator is made using OOP in Javascript, this project uses a render function which was a step towards understanding React.js better.",
      img: "assets/js.png",
      url: "https://mayurpatel78645.github.io/budgetCalculator/",
    },
    {
      id: 2,
      icon: "assets/gulp.png",
      title: "Tools and Automation",
      overview: "I have used Git in several project as a version control tool in combination with Gulp for automation. The following project mainly focuses on workflow and is a work in progress.",
      img: "assets/git.png",
      url: "https://github.com/mayurpatel78645/PersonalProject"
    }
  ]

  const handleClick = (direction) => {
    if (direction === 'left') {
      setCurrentSlider(currentSlider > 0 ? currentSlider-1: 1);
    }else {
      setCurrentSlider(currentSlider < data.length -1 ? currentSlider + 1: 0);
    }
  }

  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform: `translateX(-${currentSlider * 100}vw)`}} >
        {data.map(item => {
          return (
            <div key={item.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt="javascript symbol" />
                  </div>
                  <h2>{item.title} </h2>
                  <p>{item.overview} </p>
                  <span><a rel='noopener noreferrer' target='_blank' href={item.url} style={{color: 'black'}} >Project</a> </span>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt="logo" />
              </div>
            </div>
           </div>
          );
        })}
      </div>
      <img src="assets/arrow.png" className='arrow left' alt="arrow" onClick={() => handleClick('left')} />
      <img src="assets/arrow.png" className='arrow right' alt="arrow" onClick={() => handleClick('right')} />
    </div>
  )
}
