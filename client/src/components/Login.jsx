import React from 'react';

const Login = props => {
  const { userForm, handleChange, handleLogin } = props;
  console.log(props.userForm)
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
        // value={userForm.email}
      />
      <input
        type='password'
        name='password'
        placeholder="Password"
        onChange={handleChange}
        // value={userForm.password}
      />
      <button onClick={handleLogin} type='button'>
        Submit
      </button>
    </form>
  );
};

export default Login;
