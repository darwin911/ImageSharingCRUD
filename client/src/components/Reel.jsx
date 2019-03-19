import React from 'react';
import Post from './Post';

const Reel = props => {
  console.log(props.reelPosts.map(post => post.title))
  return (
    <main>
      {props.reelPosts && props.reelPosts.map(post => (
        <article
          className="post">
          <img src="http://unsplash.it/200/200" alt=""/>
          <p>Title: <strong>{post.title}</strong></p>
          <p>Description: {post.description}</p>
        </article>
      ))}
    </main>
  );
};

export default Reel;
