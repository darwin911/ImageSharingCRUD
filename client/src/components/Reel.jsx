import React from 'react';
import Post from './Post';

const Reel = props => {
  console.log(props.reelPosts.map(post => post.title))
  return (
    <main>
      {props.reelPosts && props.reelPosts.map(post => (
        <article
          className="post">
          <Post 
            publicId={post.publicId}
            title={post.title} 
            description={post.description}/>
        </article>
      ))}
    </main>
  );
};

export default Reel;
