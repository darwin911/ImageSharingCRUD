import React from 'react';

const Login = props => {
  const { email, password, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
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
      <button onClick={handleClick} type='button'>
        Submit
      </button>
    </form>
  );
};

export default Login;
