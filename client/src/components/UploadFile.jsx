import React from 'react';

function UploadFile (props) {
  const {handleSubmit, handleChange, filepath} = props;
  return (
      <form>
        <input type='file' name='filepath' value={filepath} onChange={handleChange}></input>
        <button type='submit' onClick={(ev)=>{
          handleSubmit(ev, filepath)
        }}>Upload</button>
      </form>
    )
}

export default UploadFile;
