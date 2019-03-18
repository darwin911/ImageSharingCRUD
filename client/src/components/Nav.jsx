import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h1>PostPicle</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/login">Register</Link>
    </nav>
  )
}

export default Nav;