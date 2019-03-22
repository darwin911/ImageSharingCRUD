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

  render() {
    const {
      currentUser,
      setProfileForm,
      handleEditProfChange,
      handleEditProfSubmit,
      profileForm
    } = this.props;
    return (
      <div className='profile'>
        {this.state.isEdit ? (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                handleEditProfSubmit();
                this.setState({ isEdit: false });
              }}
            >
              <input
                type='text'
                name='name'
                value={profileForm.name}
                onChange={handleEditProfChange}
              />

              <input
                type='text'
                name='bio'
                value={profileForm.bio}
                onChange={handleEditProfChange}
              />
              <button>Submit</button>
            </form>
          </div>
        ) : (
          <>
            {currentUser && (
              <div>
                <CloudinaryContext
                  cloudName='photo-sharing-app'
                  apiKey={api_key}
                  apiSecret={api_secret}
                >
                  <Image
                    className='pro-pic'
                    publicId={currentUser.pro_pic}
                  />
                </CloudinaryContext>
                <aside>
                  <p>
                    <strong>{currentUser.name}</strong>
                  </p>
                  <p>{currentUser.bio}</p>
                  <button
                    onClick={() => {
                      this.setState({ isEdit: true });
                      setProfileForm(currentUser);
                    }}
                  >
                    Edit
                  </button>
                </aside>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}

export default Profile;
