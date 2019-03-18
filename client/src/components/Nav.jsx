import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div>Profile Component</div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/login">Register</Link>
    </nav>
  )
}

export default Nav;