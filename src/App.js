import './app.scss';
import Topbar from './Components/topbar/Topbar';
import Intro from './Components/intro/Intro';
import Portfolio from './Components/portfolio/Portfolio';
import Works from './Components/works/Works';
import Testimonials from './Components/testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import Blogs from './Components/blogs/Blogs';
import Menu from './Components/menu/Menu';
import React, { useState } from 'react';
import BlogPage from './Components/blogs/BlogPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/aboutMe/About';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <Router>
      <Switch>
        <>
        <div className='app'>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
              <Route exact path='/'>
                <Intro />
                <Portfolio />
                <Works />
                <Blogs />
                <Testimonials />
                <About />
                <Contact />
              </Route>
              <Route exact path='/blog'>
                <BlogPage />
              </Route>
            </div>
        </div>
        </>
      </Switch>
    </Router>
    </>
  );
}

export default App;
