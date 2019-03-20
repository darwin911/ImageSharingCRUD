import React, { Component } from 'react';
import { deletePost } from '../services/services';
import { Image, CloudinaryContext } from 'cloudinary-react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };
  }
  render() {
    const {
      title,
      description,
      postId,
      publicId,
      handleDelete,
      currentUser,
      post,
      currentPost,
      handleEditChange,
      setCurrentPost,
      handleEditSubmit
    } = this.props;

    let api_key = process.env.REACT_APP_API_KEY;
    let api_secret = process.env.REACT_APP_API_SECRET;

    return (
      <article className='post'>
        <CloudinaryContext
          cloudName='photo-sharing-app'
          apiKey={api_key}
          apiSecret={api_secret}
        >
          <Image publicId={publicId} width='300' />
        </CloudinaryContext>

        {this.state.isEdit ? (
          <>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleEditSubmit();
              this.setState({
                isEdit: false
              })
            }}>
              <input
                type='text'
                name='title'
                value={currentPost.title}
                onChange={handleEditChange}
              />
              <input
                type='text'
                name='description'
                value={currentPost.description}
                onChange={handleEditChange}
              />
              <button>Submit</button>
            </form>
          </>
        ) : (
          <>
            <p>
              Title: <strong>{title}</strong>
            </p>

            <p>Description: {description}</p>

            <button
              onClick={() => {
                this.setState({
                  isEdit: true
                });
                setCurrentPost(post)
              }}
            >
              Edit
            </button>

            <button
              onClick={async () => {
                await deletePost(currentUser.id, postId);
                handleDelete(postId);
              }}
            >
              Delete
            </button>
          </>
        )}
      </article>
    );
  }
}

export default Post;
