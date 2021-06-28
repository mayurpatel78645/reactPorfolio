import './topbar.scss';
import { Link } from 'react-router-dom';

export default function Topbar({ setMenuOpen, menuOpen }) {
  return (
    <div className={`topbar ${menuOpen && 'active'}`} >
      <div className="wrapper">
        <div className="left">
          <Link to='/' style={{textDecoration: 'none', color: '#15023a'}}>
          <p href="#intro" className='logo'>Portfolio</p>
          </Link>
          <div className="itemContainer">
            <span> </span>
          </div>
          <div className="itemContainer">
            <span> </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
