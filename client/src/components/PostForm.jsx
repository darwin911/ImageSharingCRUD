import React, {Component} from 'react';
import {uploadPhoto, createPost} from '../services/services';
import FilesBase64 from 'react-file-base64';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filepath: "",
      title: "",
      description: "",
      currentUser: props.currentUser
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


  async handleSubmit (ev) {
    ev.preventDefault();
    let resp = await uploadPhoto(this.state.filepath.base64);
    let publicId = resp.data.public_id;
    let response = await createPost(this.state.currentUser.id, {
      publicId: publicId,
      title: this.state.title,
      description: this.state.description,
    });
    this.props.updateReel(response);
    this.setState({
      filepath: "",
      title: "",
      description: ""
    })
  }

  handleChange (ev) {
    let {name, value} = ev.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  getFiles(filepath) {
    this.setState({
      filepath: filepath
    });
  }

  render() {
    return (
      <form className="post-form">
        <img src={!(this.state.filepath === "") ? this.state.filepath.base64 : "https://picsum.photos/g/500/"} width='100%' alt=""/>
        <FilesBase64 multiple={false} onDone={this.getFiles.bind(this)}/>
        <input
          type='text'
          name='title'
          placeholder='Title'
          onChange={this.handleChange}
          value={this.state.title}
        />
        <input
          type='text'
          name='description'
          placeholder='Description...'
          onChange={this.handleChange}
          value={this.state.description}
        />
        <button onClick={this.handleSubmit}>Upload</button>
      </form>
    );
  };
}

export default PostForm;
