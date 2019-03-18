import React from 'react';

const Register = (props) => {
  const { name, email, password, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={props.handleSubmit}>
      <h3>Register Form</h3>
      <input
        type='text'
        name='name'
        id='name'
        placeholder="Name"
        onChange={handleChange}
        value={name}
      />
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
      <button onClick={handleSubmit} type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Register;
