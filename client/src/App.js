import React, { Component } from 'react';
import './App.css';
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext
} from 'cloudinary-react';
// import { Cloudinary } from 'cloudinary-react';
import FilesBase64 from 'react-file-base64';
import { Route, Link } from 'react-router-dom';
import { uploadPhoto, createUser, loginUser } from './services/services';
// import Hero from './components/Hero';
import Nav from './components/Nav';
// import Profile from './components/Profile';
// import ImageUpload from './components/ImageUpload';
import Login from './components/Login';
import Register from './components/Register';
// import Reel from './components/Reel';
// import Post from './components/Post';
// import PostForm from './components/PostForm';
// import Footer from './components/Footer';

let api_key = process.env.REACT_APP_API_KEY;
let api_secret = process.env.REACT_APP_API_SECRET;

class App extends Component {
  constructor() {
    super();
    this.state = {
      filepath: '',
      isLoggedIn: false,
      authToken: '',
      currentUser: null,
      reelPosts: [],
    };
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  async componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({
        authToken: localStorage.getItem('token')
      });
    }
  }

  async handleUpload(e) {
    e.preventDefault();
    let { filepath } = this.state;
    let resp = await uploadPhoto(filepath.base64);
    return resp;
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  async handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const currentUser = await loginUser({
      email,
      password,
    });
    console.log(currentUser)
    if (currentUser !== null) {
      localStorage.setItem('token', currentUser);
      this.setState({
        email: '',
        password: '',
        isLoggedIn: true,
      });
    }
  }
  // async handleLogin(e) {
  //   const currentUser = await login(userData);
  //   if (currentUser !== null) {
  //     localStorage.setItem('jwt', currentUser.token);
  //     this.setState({
  //       email: '',
  //       first_name: '',
  //       last_name: '',
  //       password: '',
  //       isLoggedIn: true,
  //     })
  //   }
  // }



  async handleSubmit(e) {
    e.preventDefault();
    //name email password bio pro_pic
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }
    const resp = await createUser(userData);
    localStorage.setItem('token', resp)
    this.setState({
      name: '',
      email: '',
      password: '',
    });
    console.log(resp)
  }

  getFiles(filepath) {
    this.setState({
      filepath: filepath
    });
  }

  render() {
    return (
      <div className='App'>
        <Nav />
        <CloudinaryContext
          cloudName='photo-sharing-app'
          apiKey={api_key}
          apiSecret={api_secret}>

          <Route
            exact path='/'
            render={props => (
              <div>
                <h2>Image retrieved from our Cloudinary account through the React SDK.</h2>
                <Image
                  publicId='sample'
                  width='300' />
                <form>
                  <FilesBase64
                    multiple={false}
                    onDone={this.getFiles.bind(this)} />
                  <button
                    type='submit'
                    onClick={this.handleUpload}>upload</button>
                </form>
              </div>
            )}
          />

          <Route
            path='/user/:id'
            render={props => (
              <div>
                <h1>User: {props.match.params.id}</h1>
              </div>
            )}
          />
        </CloudinaryContext>

        <Route path="/login" render={
          () => <Login
            email={this.state.email}
            password={this.state.password}
            handleChange={this.handleChange}
            handleLogin={this.handleLogin}
          />}
        />
        <Route path="/register" render={
          () => <Register
            name={this.state.name}
            email={this.state.email}
            password={this.state.password}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />}
        />
      </div>
    );
  }
}

export default App;
