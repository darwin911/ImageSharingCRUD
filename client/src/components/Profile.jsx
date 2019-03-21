import React from 'react';
import { Image, CloudinaryContext } from 'cloudinary-react';

let api_key = process.env.REACT_APP_API_KEY;
let api_secret = process.env.REACT_APP_API_SECRET;

const Profile = props => {
  return (
    <div className='profile'>
      {props.currentUser &&
        <>
          <CloudinaryContext
            cloudName='photo-sharing-app'
            apiKey={api_key}
            apiSecret={api_secret}>
            <Image className="pro-pic" publicId={props.currentUser.pro_pic} />
          </CloudinaryContext>
          <aside>
            <p><strong>{props.currentUser.name}</strong></p>
            <p>{props.currentUser.bio}</p>
            <button>Edit</button>
          </aside>
        </>
      }
    </div>
  );
};

export default Profile;
