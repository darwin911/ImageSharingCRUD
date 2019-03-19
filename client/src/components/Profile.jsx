import React from 'react';

const Profile = props => {
  return (
    <div className='profile'>
      {props.currentUser && 
        <>
          <img src={props.currentUser.pro_pic} alt='props.currentUser.pro_pic' />
          <p>{props.currentUser.name}</p>
          <p>{props.currentUser.bio}</p>
          <button>Edit</button>
        </>
      }
    </div>
  );
};

export default Profile;
