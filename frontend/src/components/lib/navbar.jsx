import { Link } from 'react-router-dom';
import capitalizeFirstLetter from './capitalise';
import longLogo from '../homepage/images/longLogo.png';
// import thumbTackLogo from './images/thumbTackLogo.png';

export default function NavBar({ linkTo }) {
  return (
      <div className="navbar">
         <div className="navbar-logo">
          <img src={longLogo} alt="logo"/>
        {/* <h1 className='logo'>Logo</h1> */}
      </div>
      <div className="navbar-links">
        <Link to={`/${linkTo}`} className='link'>{capitalizeFirstLetter(linkTo)}</Link>
      </div>
    </div>
  );
}


