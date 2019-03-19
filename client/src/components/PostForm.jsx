import React from 'react';

const PostForm = props => {
  const { title, description, publicId, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='Title'
        onChange={handleChange}
        value={title}
      />
      <input
        type='text'
        name='description'
        placeholder='Description...'
        onChange={handleChange}
        value={description}
      />
      <input type='text' name='publicId' value={publicId} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};
export default PostForm;