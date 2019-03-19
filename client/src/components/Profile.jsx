import React from 'react';

const Profile = props => {
  const proPicStyle = {
    background: "url(" + props.currentUser.pro_pic + ")",
    height: '100px',
    width: '100px',
    backgroundSize: 'cover',
    borderRadius: '50%',
  }
  return (
    <div className='profile'>
      {props.currentUser &&
        <>
          <div
            className="pro-pic"
            style={proPicStyle}
            alt='' />
          <p><strong>{props.currentUser.name}</strong></p>
          <p>{props.currentUser.bio}</p>
          <button>Edit</button>
        </>
      }
    </div>
  );
};

export default Profile;
