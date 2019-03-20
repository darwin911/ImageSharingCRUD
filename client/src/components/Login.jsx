import React from 'react';
import {Redirect} from 'react-router-dom';

const Login = props => {
  const { userForm, handleChange, handleLogin, isLoggedIn } = props;
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
        value={userForm.email}
      />
      <input
        type='password'
        name='password'
        placeholder="Password"
        onChange={handleChange}
        value={userForm.password}
      />
      <button onClick={handleLogin} type='button'>
        Submit
      </button>
      {isLoggedIn && <Redirect to='/'/>}
    </form>
  );
};

export default Login;
