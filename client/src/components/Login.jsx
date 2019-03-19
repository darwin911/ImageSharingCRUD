import React from 'react';

const Login = props => {
  const { email, password, handleChange, handleLogin } = props;
  return (
    <form 
      onSubmit={handleLogin}
      className="login-form">
      <h2>Login</h2>
      <input
        type='text'
        name='email'
        placeholder="Email"
        onChange={handleChange}
        value={email}
      />
      <input
        type='password'
        name='password'
        placeholder="Password"
        onChange={handleChange}
        value={password}
      />
      <button onClick={handleLogin} type='button'>
        Submit
      </button>
    </form>
  );
};

export default Login;
