import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import { cssProject, mittflix, weatherApp, tripPlanner } from '../../data';

export default function Portfolio() {

  const [selected, setSelected] = useState('css');
  const [data, setData] = useState([]);

  const list = [
    {
      id: "css",
      title: "CSS Project"
    },
    {
      id: "mittFlix",
      title: "MittFlix"
    },
    {
      id: "weatherApp",
      title: "Weather App"
    },
    {
      id: "tripPlanner",
      title: "Trip Planner"
    }
  ]

  useEffect(() => {
    switch(selected) {
      case "css":
        setData(cssProject);
        break;
      case "mittFlix":
        setData(mittflix);
        break;
      case "weatherApp":
        setData(weatherApp);
        break;
      case "tripPlanner": 
        setData(tripPlanner);
        break;
      default: 
        setData(cssProject);
    }
  }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => {
          return (
            <PortfolioList key={item.id} id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} />
          )
        })}
      </ul>
      <div className="container">
        {data.map(item => {
          return (
            <a rel='noopener noreferrer' target='_blank' href={item.url}>
            <div className="item">
              <img src={item.img} alt="project thumbnail" />
              <h3>{item.overview}</h3>
            </div>
            </a>
          );
        })}
      </div>
    </div>
  )
}
