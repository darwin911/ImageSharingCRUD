import React from 'react';

const Profile = props => {
  return (
    <div className='profile'>
      {props.currentUser.map(user => (
        <div>
          <img src='' alt='' />
          <p>{user.name}</p>
          <p>{user.bio}</p>
          {/* Edit profile buton */}
          <button onClick={props.handleSubmit}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Profile;
