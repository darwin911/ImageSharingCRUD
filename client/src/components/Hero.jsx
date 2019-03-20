import React from 'react';

const Hero = props => {
  return (
    <section className="hero" >
      <h1 className='title'><span>Post</span>Pic</h1>
      {
        props.isLoggedIn
        ?
        <p>Logged in! Welcome!</p>

        :
        <p>Welcome to PostPic, where you can post a pic!</p>
      }
    </section>
  );
};

export default Hero;
