import React from 'react';

const Profile = props => {
  return (
    <div className='profile'>
      {props.currentUser &&
        <>
          <img className="pro-pic" src={props.currentUser.pro_pic} alt='props.currentUser.pro_pic' />
          <p><strong>{props.currentUser.name}</strong></p>
          <p>{props.currentUser.bio}</p>
          <button>Edit</button>
        </>
      }
    </div>
  );
};

export default Profile;
