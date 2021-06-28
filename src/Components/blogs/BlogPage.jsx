import React from 'react';
import './blogPage.scss';
import { useLocation } from 'react-router-dom';
import Strategy from './Strategy';
import CodeSnippets from './CodeSnippets';
import HtmlCss from './HtmlCss';
import Ssl from './Ssl';
import Password from './Password';
import Games from './Games';

export default function BlogPage() {

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  return (
    <div className='blogPage'>
      <div className='container'>
        {query === 'Sekiro Strategy Guide' ? <Strategy /> 
          : query === 'Code Snippets' ? <CodeSnippets />
          : query === 'HTML and CSS' ? <HtmlCss />
          : query === 'SSL' ? <Ssl />
          : query === 'Password Management' ? <Password />
          : query === 'Games' ? <Games /> : ''
        }
      </div>
    </div>
  )
}
