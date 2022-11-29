import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        {/* <img src={logo} alt="logo" /> */}
        <h1 className='logo'>Logo</h1>
      </div>
      <div className="navbar-links">
        <Link to="/login" className='link'>Login</Link>
      </div>
    </div>
  );
}
