import React from 'react';

const Profile = props => {
  return (
    <div className='profile'>
      {props.currentUser && 
        <div>
          <img src='' alt='' />
          <p>{props.currentUser.name}</p>
          <p>{props.currentUser.bio}</p>
          <button>Edit</button>
        </div>}
    </div>
  );
};

export default Profile;
