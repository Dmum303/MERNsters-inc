import { Link } from 'react-router-dom';
import longLogo from './images/longLogo.png';
// import thumbTackLogo from './images/thumbTackLogo.png';

export default function NavBar() {
  return (
      <div className="navbar">
         <div className="navbar-logo">
          <img src={longLogo} alt="logo"/>
        {/* <h1 className='logo'>Logo</h1> */}
      </div>
      <div className="navbar-links">
        <Link to="/login" className='link'>Login</Link>
          </div>
       </div>
  );
}


