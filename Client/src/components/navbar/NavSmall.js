import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
const NavSmall = (props) => {
  return (
      <nav className="header">
          <h2 className='logo'>MY BLOG</h2>  {/*JSX*/}
          <div className='articles'>
              {/* <Link className='link' to="/" >Home</Link> */}
              <Link className='link' to="/signup">SignUp</Link>
              <Link className='link' to="/login" onClick={props.setlogout(0)}>Login </Link>
              
        </div>
      </nav>
    
    );
}

export default NavSmall