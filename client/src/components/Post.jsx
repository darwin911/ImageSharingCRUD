import React, { Component } from 'react';
import { deletePost} from '../services/services';
import {Link} from 'react-router-dom';
import { Image, CloudinaryContext } from 'cloudinary-react';
import Comments from './Comments';
import Likes from './Likes'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }


  render() {
    const {
      title,
      description,
      postId,
      publicId,
      userId,
      handleDelete,
      post,
      currentPost,
      currentUser,
      handleEditChange,
      setCurrentPost,
      handleEditSubmit,
      userInfo
    } = this.props;


    let api_key = process.env.REACT_APP_API_KEY;
    let api_secret = process.env.REACT_APP_API_SECRET;



    return (
      <article className='card'>

        <CloudinaryContext
          className='image-header'
          cloudName='photo-sharing-app'
          apiKey={api_key}
          apiSecret={api_secret}>
          <Link to={userInfo ? "/users/" + userInfo.id : null}>
            <Image publicId={userInfo ? userInfo.pro_pic : "default"} className='post-user-pro-pic'/>
          </Link>
          <p>{userInfo ? userInfo.name : null}</p>
        </CloudinaryContext>

        <CloudinaryContext
          cloudName='photo-sharing-app'
          apiKey={api_key}
          apiSecret={api_secret}>
          <Image className="post" publicId={publicId} />
        </CloudinaryContext>

        <section className="card-details">
          {this.state.isEdit ? (
            <>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleEditSubmit();
                this.setState({ isEdit: false })
              }}>

                <input
                  type='text'
                  name='title'
                  value={currentPost.title}
                  onChange={handleEditChange} />

                <input
                  type='text'
                  name='description'
                  value={currentPost.description}
                  onChange={handleEditChange} />
                <button>Submit</button>

              </form>
            </>
          ) : (
              <>
                {(parseInt(userId) === parseInt(currentUser.id)) && <svg onClick={() => {
                  this.setState({ isEdit: true });
                  setCurrentPost(post)
                }}
                  id="editIcon"
                  className="edit-icon"
                  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg>}
                {/* ************************* DELETE POST NEEDS DYNAMIC ID */}
                {(parseInt(userId) === parseInt(currentUser.id)) && <svg onClick={async () => {
                  await deletePost(userId, postId);
                  handleDelete(postId)
                }}
                  id="deleteIcon"
                  className="delete-icon"
                  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>}
                <p className="card-title"><strong>{title}</strong></p>
                <p className="card-description">{description}</p>
              </>
            )}
          <Likes postId={postId} currentUser={currentUser} />
          <Comments postId={postId} currentUser={currentUser} />
        </section>
      </article>
    );
  }
}

export default Post;
