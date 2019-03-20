import React from 'react';
import Post from './Post';

const Reel = props => {
  let {updateReel, handleDelete, currentUser, reelPosts, setCurrentPost} = props;
  //console.log(props.reelPosts.map(post => post.title))
  //console.log(props.reelPosts.map(post => post.id))
  //console.log(currentUser)
  return (
    <main>
      {props.reelPosts && props.reelPosts.map(post => (
        <Post
          publicId={post.publicId}
          postId={post.id}
          title={post.title}
          description={post.description}
          post={post}
          handleEditChange={props.handleEditChange}
          handleEditSubmit={props.handleEditSubmit}
          setCurrentPost={props.setCurrentPost}
          currentPost={props.currentPost}
          handleDelete={handleDelete}
          currentUser={currentUser}/>
      ))}
    </main>
  );
};

export default Reel;
