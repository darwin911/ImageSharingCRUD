import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
  console.log(props.isLoggedIn);
  return (
    <nav>
      <Link to='/'>Home</Link>

      {
        props.isLoggedIn
       ? 
        <a href='' onClick={props.handleLogout}>Logout</a>
       : 
        <span>
          <Link to='/login'>Login</Link> / <Link to='/register'>Register</Link>
        </span>
      }
    </nav>
  );
};

export default Nav;
