import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
const NavMain = (props) => {
  return (
      <nav className="header">
          <h2 className='logo'>MY BLOG</h2>  {/*JSX*/}
          <div className='articles'>
          <Link className='link' to="/signup">SignUp</Link>
              <Link className='link' to="/login" >Login </Link>
              <Link className='link' to="/" >Home</Link>
              <Link className='link' to="/article-list">Articles</Link>
              <Link className='link' to="/add-article">Add Articles</Link>
              {/* <Link className='link' to="/">About</Link> */}
              <Link className='link' to="/" >Logout</Link>
        </div>
      </nav>
    
    );
}

export default NavMain;
