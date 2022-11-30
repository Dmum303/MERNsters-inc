import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const elementSignOut = <FontAwesomeIcon icon={ faRightFromBracket } />

const handleLogout = () => {
    window.localStorage.removeItem("token")
}

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        {/* <img src={logo} alt="logo" /> */}
        <h1 className='logo'>Logo</h1>
      </div>
      <div className="navbar-links">
      <a className='navbar-home' href="/posts" >friendzone;</a>
      <a onClick={ handleLogout } className='navbar-signout' href="/" >Log Out { elementSignOut }</a>
      <Link to="/login" className='link'>Login</Link>
      <Link to="/logout" className='link'>Logout</Link>

      </div>
    </div>
  );
}


