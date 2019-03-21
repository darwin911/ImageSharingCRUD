import React, { Component } from 'react';
import { Image, CloudinaryContext } from 'cloudinary-react';


let api_key = process.env.REACT_APP_API_KEY;
let api_secret = process.env.REACT_APP_API_SECRET;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };
  }
  // const proPicStyle = {
  //   background: "url(" + props.currentUser.pro_pic + ")",
  //   height: '100px',
  //   width: '100px',
  //   backgroundSize: 'cover',
  //   borderRadius: '50%',
  // }
  render() {
    const {
      name,
      bio,
      currentUser,
      handleProfEditChange,
      handleProfEditSubmit
    } = this.props;
    return (
      <div className='profile'>
        {this.state.isEdit ? (
          <>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleProfEditSubmit();
                this.setState({ isEdit: false });
              }}
            >
              <input
                type='text'
                name='name'
                value={currentUser.name}
                onChange={handleProfEditChange}
              />

              <input
                type='text'
                name='bio'
                value={currentUser.bio}
                onChange={handleProfEditChange}
              />
              <button>Submit</button>
            </form>
          </>
        ) : (
          this.props.currentUser && (
            <>
              <CloudinaryContext
                cloudName='photo-sharing-app'
                apiKey={api_key}
                apiSecret={api_secret}
              >
                <Image
                  className='pro-pic'
                  publicId={this.props.currentUser.pro_pic}
                />
              </CloudinaryContext>
              <aside>
                <p>
                  <strong>{this.props.currentUser.name}</strong>
                </p>
                <p>{this.props.currentUser.bio}</p>
                <button
                  onClick={() => {
                    this.setState({ isEdit: true });
                    setCurrentUser(user);
                  }}
                >
                  Edit
                </button>
              </aside>
            </>
          )
        )}
      </div>
    );
  }
}
export default Profile;
