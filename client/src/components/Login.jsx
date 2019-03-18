import React from 'react';

const Login = props => {
  const { email, password, handleChange, handleSubmit } = props;
  return (
    <form 
      onSubmit={handleSubmit}
      className="login-form">
      <h2>Login</h2>
      <input
        type='text'
        name='email'
        id='email'
        placeholder="Email"
        onChange={handleChange}
        value={email}
      />
      <input
        type='text'
        name='password'
        id='password'
        placeholder="Password"
        onChange={handleChange}
        value={password}
      />
      <button onClick={handleSubmit} type='button'>
        Submit
      </button>
    </form>
  );
};

export default Login;
