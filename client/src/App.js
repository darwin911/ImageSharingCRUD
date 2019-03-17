import React, { Component } from 'react';
import './App.css';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import {Cloudinary} from 'cloudinary-react';
import FilesBase64 from 'react-file-base64';
import {Route, Link} from 'react-router-dom';
import uploadPhoto from './services/services';

let api_key = process.env.REACT_APP_API_KEY;
let api_secret = process.env.REACT_APP_API_SECRET;

class App extends Component {
  constructor() {
    super();
    this.state = {
      filepath: '',
      isLoggedIn: false,
      authToken: '',
      reelPosts: []
    }
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleUpload (ev) {
    ev.preventDefault();
    let {filepath} = this.state
    let resp = await uploadPhoto(filepath.base64);
    return resp;
  }

  handleChange (ev) {
    const {name, value} = ev.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  getFiles(filepath) {
    this.setState({
      filepath: filepath
    })
  }

  render() {
    return (
      <div className="App">

          <CloudinaryContext
            cloudName="photo-sharing-app"
            apiKey={api_key}
            apiSecret={api_secret}>

            <Route
            exact path = '/'
            render={(props) => (
              <div>
                <h2>This is an image retrieved from our Cloudinary account through the React SDK.</h2>
                <Image publicId="sample" width="300" />
                <form>
                  <FilesBase64
                    multiple={ false }
                    onDone={ this.getFiles.bind(this) } />
                    <button type='submit' onClick={this.handleUpload}>upload</button>
                </form>
              </div>)}/>

              <Route
              path = '/user/:id'
              render = {(props) => (
                <div>
                  <h1>User: {props.match.params.id}</h1>
                </div>
              )}/>



          </CloudinaryContext>

      </div>
    );
  }
}

export default App;
