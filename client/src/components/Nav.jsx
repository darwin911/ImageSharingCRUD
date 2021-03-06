import React from 'react';
import { Link } from 'react-router-dom';
import { CloudinaryContext, Image } from 'cloudinary-react';

let api_key = process.env.REACT_APP_API_KEY;
let api_secret = process.env.REACT_APP_API_SECRET;

const Nav = props => {
  return (
    <header>
      <nav className="container">
      {props.proPic &&
        <Link to={"/users/" + props.currentUser.id}>
          <CloudinaryContext
            cloudName='photo-sharing-app'
            apiKey={api_key}
            apiSecret={api_secret}>
            <Image className="nav-pro-pic" publicId={props.proPic} />
          </CloudinaryContext>
        </Link>}
        <Link to='/'>Home</Link>
        {
          props.isLoggedIn
            ?
            <Link to='/' onClick={props.handleLogout}>Logout</Link>
            :
            <span>
              <Link to='/login'>Login</Link> / <Link to='/register'>Register</Link>
            </span>
        }
      </nav>
    </header>
  );
};

export default Nav;
