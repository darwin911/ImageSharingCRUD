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
import Profile from './components/Profile';
// import ImageUpload from './components/ImageUpload';
import Login from './components/Login';
import Register from './components/Register';
import Reel from './components/Reel';
// import Post from './components/Post';
// import PostForm from './components/PostForm';
import Footer from './components/Footer';
import PostForm from './components/PostForm';

let api_key = process.env.REACT_APP_API_KEY;
let api_secret = process.env.REACT_APP_API_SECRET;

class App extends Component {
  constructor() {
    super();
    this.state = {
      authToken: '',
      currentUser: null,
      filepath: '',
      isLoggedIn: false,
      userForm: {
        name: '',
        email: '',
        password: ''
      },
      reelPosts: [
        {
          title: 'Mike Post',
          description: 'this is a long description'
        }
      ]
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
      if (localStorage.getItem('user')) {
        this.setState({
          currentUser: JSON.parse(localStorage.getItem('user')),
          isLoggedIn: true
        })
      }
    }
  }

  async handleUpload(e) {
    e.preventDefault();
    let { filepath } = this.state;
    let resp = await uploadPhoto(filepath);
    console.log(resp);
    return resp;
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

  async handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state.userForm;
    console.log(this.state.userForm)
    const resp = await loginUser({
      email,
      password
    });
    console.log(resp[0]);
    console.log(resp[1]);
    if (resp !== null) {
      localStorage.setItem('token', resp[0]);
      localStorage.setItem('user', JSON.stringify(resp[1]));
      this.setState(prevState => ({
        isLoggedIn: true,
        authToken: resp[0],
        currentUser: resp[1],
        userForm: {
          ...prevState.userForm,
          email: '',
          password: ''
        }
      }));
    }
  }
  handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    this.setState({
      isLoggedIn: false
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    //name email password bio pro_pic
    const userData = { ...this.state.userForm };
    const resp = await createUser(userData);
    localStorage.setItem('token', resp[0]);
    localStorage.setItem('user', JSON.stringify(resp[1]));

    this.setState(prevState => ({
      ...prevState,
      userForm: {
        ...prevState.userForm,
        name: '',
        email: '',
        password: '',
      },
      isLoggedIn: true,
      authToken: resp[0],
      currentUser: resp[1]
    }));
    console.log(resp);
  }

  getFiles(filepath) {
    this.setState({
      filepath: filepath.base64
    });
  }

  render() {
    return (
      <div className='App'>
        <Nav
          isLoggedIn={this.state.isLoggedIn} />

        <h1 className="title"><span>Post</span>Pic</h1>

        <Profile
          currentUser={this.state.currentUser} />

        {!this.state.isLoggedIn && (
          <>
            <Route
              exact path='/login'
              render={() => (
                <Login
                  userForm={this.state.userForm}
                  handleChange={this.handleChange}
                  handleLogin={this.handleLogin} />)} />
            <Route
              exact path='/register'
              render={() => (
                <Register
                  userForm={this.state.userForm}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit} />)} />
          </>
        )}

        <Reel reelPosts={this.state.reelPosts} />

        <Footer />
      </div>
    );
  }
}

export default App;


// <CloudinaryContext
// cloudName='photo-sharing-app'
// apiKey={api_key}
// apiSecret={api_secret}>
// <Route exact path='/'
//   render={props => (
//     <div>
//       <h2>Image retrieved from our Cloudinary account through the React SDK.</h2>
//       <Image publicId='sample' width='300' />
//       <form>
//         <FilesBase64
//           multiple={false}
//           onDone={this.getFiles.bind(this)}
//         />
//         <button type='submit' onClick={this.handleUpload}>
//           upload
//         </button>
//       </form>
//     </div>
//   )}
// />

// <Route
//   path='/user/:id'
//   render={props => (
//     <div>
//       <h1>User: {props.match.params.id}</h1>
//     </div>
//   )}
// />
// </CloudinaryContext>
