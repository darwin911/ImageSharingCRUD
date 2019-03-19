import React from 'react';

const Post = props => {
  const { title, description } = props;
  return (
    <article className='post'>
      <img src='http://unsplash.it/200/200' alt='' />
      <p>
        Title: <strong>{title}</strong>
      </p>
      <p>Description: {description}</p>
    </article>
  );
};

export default Post;
