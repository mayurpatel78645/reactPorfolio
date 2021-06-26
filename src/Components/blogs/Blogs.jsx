import './blogs.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import { password, snippets, ssl, strategy, htmlCss } from '../../blogData';
import { useHistory } from 'react-router-dom';

export default function Blog() {

  const history = useHistory();

  const [selected, setSelected] = useState('css');
  const [data, setData] = useState([]);

  const list = [
    {
      id: "htmlCss",
      title: "HTML & CSS"
    },
    {
      id: "ssl",
      title: "SSL"
    },
    {
      id: "password",
      title: "Password Management"
    },
    {
      id: "strategy",
      title: "Strategy Guide"
    },
    {
      id: "snippets",
      title: "Code Snippets"
    }
  ]

  useEffect(() => {
    switch(selected) {
      case "htmlCss":
        setData(htmlCss);
        break;
      case "ssl":
        setData(ssl);
        break;
      case "password":
        setData(password);
        break;
      case "strategy": 
        setData(strategy);
        break;
      case "snippets":
        setData(snippets);
        break;
      default: 
        setData(htmlCss);
    }
  }, [selected]);

  const handleBlog = (title) => {
    history.push(`/blog?query=${title}`);
  }

  return (
    <div className='blogs' id='blogs'>
      <h1>Blogs</h1>
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
            < a onClick={() => handleBlog(item.title)} key={item.id} rel='noopener noreferrer' target='_blank' href={item.url}>
            <div className="item" >
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
