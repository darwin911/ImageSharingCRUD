import React from 'react';
import Post from './Post';

const Reel = props => {
  let {updateReel, handleDelete} = props;
  console.log(props.reelPosts.map(post => post.title))
  return (
    <main>
      {props.reelPosts && props.reelPosts.map(post => (
        <Post
          publicId={post.publicId}
          postId={post.id}
          title={post.title}
          description={post.description}
          handleDelete={handleDelete}/>
      ))}
    </main>
  );
};

export default Reel;
