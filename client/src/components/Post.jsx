import React from 'react';
import deletePost from '../services/services';
import { Image, CloudinaryContext } from 'cloudinary-react';

const Post = props => {
  const { title, description, id} = props;
    
let api_key = process.env.REACT_APP_API_KEY;
let api_secret = process.env.REACT_APP_API_SECRET;

  return (
    <article className='post'>
      <CloudinaryContext
        cloudName='photo-sharing-app'
        apiKey={api_key}
        apiSecret={api_secret}>
        <Image
          publicId={publicId}
          width='300' />
      </CloudinaryContext>
      <p>
        Title: <strong>{title}</strong>
      </p>
      <p>Description: {description}</p>
      <button>Delete</button>
    </article>
  );
};

export default Post;
