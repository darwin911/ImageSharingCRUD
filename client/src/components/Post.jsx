import React from 'react';
import deletePost from '../services/services';

const Post = props => {
  const { title, description, id} = props;
  return (
    <article className='post'>
      <img src='http://unsplash.it/200/200' alt='' />
      <p>
        Title: <strong>{title}</strong>
      </p>
      <p>Description: {description}</p>
      <button>Delete</button>
    </article>
  );
};

export default Post;
