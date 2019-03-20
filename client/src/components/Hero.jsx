import React from 'react';

const Hero = props => {
  return (
    <div>
      <h1 className='title'>
        <span>Post</span>Pic
      </h1>
      <div className='hero'>
        {/*<img src="https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2019/lightning.jpg" />*/}

        {
          props.isLoggedIn 
        ? 
          <p>Logged in! Welcome!</p>
      
        : 
          <p>Welcome to PostPic, where you can post a pic!</p>
        }
      </div>
    </div>
  );
};

export default Hero;
