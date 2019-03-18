import React from 'react';

const Register = (props) => {
  const { name, email, password, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={props.handleSubmit}>
      <h3>Register Form</h3>
      <label>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        onChange={handleChange}
        value={name}
      />
      <label>Email</label>
      <input
        type='text'
        name='email'
        id='email'
        onChange={handleChange}
        value={email}
      />
      <label>Password</label>
      <input
        type='text'
        name='password'
        id='password'
        onChange={handleChange}
        value={password}
      />
      <button onClick={handleSubmit} type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Register;
