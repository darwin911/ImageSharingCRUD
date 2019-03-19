import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <span>
        <Link to="/login">
          Login
        </Link> / <Link to="/register">
          Register
        </Link>
      </span>
    </nav>
  )
}

export default Nav;