import React from 'react';

const Register = props => {
  const { name, email, password, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        type='text'
        name='name'
        placeholder='Name'
        onChange={handleChange}
        value={name}
      />
      <input
        type='text'
        name='email'
        placeholder='Email'
        onChange={handleChange}
        value={email}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        onChange={handleChange}
        value={password}
      />
      <button onClick={handleSubmit} type='button'>
        Submit
      </button>
    </form>
  );
};

export default Register;
