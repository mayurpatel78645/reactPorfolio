import './topbar.scss';
import { PhoneAndroid, Mail } from '@material-ui/icons';
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
            <PhoneAndroid className='icon' />
            <span> +431-276-3707 </span>
          </div>
          <div className="itemContainer">
            <Mail className='icon' />
            <span> mayurpatel78645@gmail.com </span>
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
