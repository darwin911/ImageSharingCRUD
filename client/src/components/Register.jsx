import React from 'react';

const Register = props => {
  const { userForm, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type='text'
        name='name'
        placeholder='Name'
        onChange={handleChange}
        value={userForm.name}
      />
      <input
        type='text'
        name='email'
        placeholder='Email'
        onChange={handleChange}
        value={userForm.email}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        onChange={handleChange}
        value={userForm.password}
      />
      <button onClick={handleSubmit} type='button'>
        Submit
      </button>
    </form>
  );
};

export default Register;
