import React from 'react';
import Post from './Post';

const Reel = props => {
  let {updateReel, handleDelete, currentUser, reelPosts, setCurrentPost} = props;

  return (
    <main className="container">
      {props.reelPosts && props.reelPosts.map(post => (
        <Post
          key={post.id}
          currentUser={currentUser}
          publicId={post.publicId}
          postId={post.id}
          title={post.title}
          userId={post.userId}
          description={post.description}
          post={post}
          handleEditChange={props.handleEditChange}
          handleEditSubmit={props.handleEditSubmit}
          setCurrentPost={props.setCurrentPost}
          currentPost={props.currentPost}
          handleDelete={handleDelete}
        />
      ))}
    </main>
  );
};

export default Reel;
