import React from 'react';

const Register = (props) => {
  const { name, email, password, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h3>Register Form</h3>
      <input
        type='text'
        name='name'
        placeholder="Name"
        onChange={handleChange}
        value={name}
      />
      <input
        type='text'
        name='email'
        placeholder="Email"
        onChange={handleChange}
        value={email}
      />
      <input
        type='text'
        name='password'
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
