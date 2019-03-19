import React from 'react';

const Reel = props => {
  return (
    <div>
      {props.reelPost.map(post => (
        <div>
          <p>Title Bar</p>
          {/* {post.title}  */}
          <p>Description area</p>
          {/* {post.description} */}
        </div>
      ))}
      <p>Reel</p>
    </div>
  );
};

export default Reel;
