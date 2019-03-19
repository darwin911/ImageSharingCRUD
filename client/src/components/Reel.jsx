import React from 'react';
import Post from './Post';

const Reel = props => {
  return (
    <main>
      {props.reelPost && props.reelPost.map(post => (
        <div>
          <p>Title Bar</p>
          {/* {post.title}  */}
          <p>Description area</p>
          {/* {post.description} */}
        </div>
      ))}
    </main>
  );
};

export default Reel;
