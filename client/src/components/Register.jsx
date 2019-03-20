import React, {Component} from 'react';
import FilesBase64 from 'react-file-base64';
import {createUser, uploadPhoto} from '../services/services.js';

//const { userForm, handleChange, handleSubmit } = props;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userForm: {
        name: '',
        email: '',
        password: '',
        bio: '',
      },
      filepath: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit (ev) {
    ev.preventDefault();
    let publicId;
    if (this.state.filepath) {
      try {
        let resp = await uploadPhoto(this.state.filepath.base64);
        publicId = resp.data.public_id;
      } catch(e) {
        console.error(e);
      }
    }
    //console.log('handlesubmit called in postForm');
    let resp = await createUser({
      name: this.state.userForm.name,
      password: this.state.userForm.password,
      email: this.state.userForm.email,
      bio: this.state.userForm.bio,
      pro_pic: (publicId === undefined) ? "default" : publicId,
    });
    localStorage.setItem('token', resp[0]);
    localStorage.setItem('user', JSON.stringify(resp[1]));
    this.props.handleRegister(resp[0],resp[1]); 
  }

  getFiles(filepath) {
    this.setState({
      filepath: filepath
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      userForm: {
        ...prevState.userForm,
        [name]: value
      }
    }));
  }

  render() {
    const uploadStyleObject = {borderRadius: "100%"};
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Register</h2>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={this.handleChange}
          value={this.state.userForm.name}
          />
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={this.handleChange}
          value={this.state.userForm.email}
          />
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={this.handleChange}
          value={this.state.userForm.password}
          />
        <input
          type='text'
          name='bio'
          placeholder='Bio'
          onChange={this.handleChange}
          value={this.state.userForm.bio}
          />
        <h6>Select Profile Picture</h6>
        <img src={!(this.state.filepath === "") ? this.state.filepath.base64 : null} width='100%' style={uploadStyleObject}/>
        <FilesBase64 multiple={false} onDone={this.getFiles.bind(this)}/>
        <button onClick={this.handleSubmit} type='button'>
          Submit
        </button>
      </form>
  );
 }
};

export default Register;
