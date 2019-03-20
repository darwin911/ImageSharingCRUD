import React, { Component } from 'react';
import './App.css';
import { Video, Transformation, CloudinaryContext } from 'cloudinary-react';
// import { Cloudinary } from 'cloudinary-react';
import FilesBase64 from 'react-file-base64';
import { Route, Link, Redirect} from 'react-router-dom';
import {
  uploadPhoto,
  createUser,
  loginUser,
  getAllPosts,
  editPost
} from './services/services';
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
import Hero from './components/Hero';

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
        //this no longer needs passed to register
        name: '',
        email: '',
        password: ''
      },
      reelPosts: [],
      currentPost: {}
    };
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.updateReel = this.updateReel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.setCurrentPost = this.setCurrentPost.bind(this);
  }
// NEEDS FIX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// find array of 1rst and this = that
  updateReel(post) {
    this.setState(prevState => ({
      ...prevState,
      reelPosts: [
        post,
        ...prevState.reelPosts
      ]
    }))
  }
///////////////////////////////
  handleDelete(postId) {
    this.setState(prevState => ({
      ...prevState,
      reelPosts: prevState.reelPosts.filter(post => !(post.id === postId))
    }));
  }

  async componentDidMount() {
   console.log('component did mount called')
   const reelPosts = await getAllPosts();
   this.setState({
     reelPosts
   })
    if (localStorage.getItem('token')) {
      this.setState({
        authToken: localStorage.getItem('token')
      });
      if (localStorage.getItem('user')) {
        this.setState({
          currentUser: JSON.parse(localStorage.getItem('user')),
          isLoggedIn: true
        });
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

  handleEditChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      currentPost: {
        ...prevState.currentPost,
        [name]: value
      }
    }));
  }

  async handleEditSubmit() {
    const newPost = await editPost(
      this.state.currentUser.id,
      this.state.currentPost
    );
    this.updateReel(newPost);
  }

  setCurrentPost(post) {
    this.setState({
      currentPost: post
    });
  }

  async handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state.userForm;
    console.log(this.state.userForm);
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

  handleRegister(token, currentUser) {
    this.setState(prevState => ({
      ...prevState,
      authToken: token,
      currentUser: currentUser
    }));
  }

  handleLogout(e) {
    e.preventDefault();
    console.log('User has been logged out');
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
        password: ''
      },
      isLoggedIn: true,
      authToken: resp[0],
      currentUser: resp[1]
    }));
    console.log(resp);
  }

  render() {
    return (
      <div className='App'>
        <Nav
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
        />

        <Hero isLoggedIn={this.state.isLoggedIn} />

        {!this.state.isLoggedIn && (
          <>
            <Route
              exact
              path='/login'
              render={() => (
                <Login
                  userForm={this.state.userForm}
                  handleChange={this.handleChange}
                  handleLogin={this.handleLogin}
                  isLoggedIn={this.state.isLoggedIn}
                />
              )}
            />
            <Route
              exact
              path='/register'
              render={() => (
                <Register
                  userForm={this.state.userForm}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  handleRegister={this.handleRegister}
                  isLoggedIn={this.state.isLoggedIn}
                />
              )}
            />
          </>
        )}

        {this.state.isLoggedIn && (
          <>
            <Profile currentUser={this.state.currentUser} />
            <PostForm updateReel={this.updateReel}
                      currentUser={this.state.currentUser}/>
            <Reel
              currentUser={this.state.currentUser}
              reelPosts={this.state.reelPosts}
              handleDelete={this.handleDelete}
              handleEditChange={this.handleEditChange}
              handleEditSubmit={this.handleEditSubmit}
              setCurrentPost={this.setCurrentPost}
              currentPost={this.state.currentPost}
            />
          </>
        )}

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
//     <>
//       <h2>Image retrieved from our Cloudinary account through the React SDK.</h2>
//       <Image
//         publicId='sample'
//         width='300' />
//       <form>
//         <FilesBase64
//           multiple={false}
//           onDone={this.getFiles.bind(this)} />
//         <button type='submit'
//           onClick={this.handleUpload}>upload</button>
//       </form>
//     </>)} />
// <Route
//   path='/user/:id'
//   render={props => (
//     <h1>User: {props.match.params.id}</h1>
//   )}
// />
// </CloudinaryContext>
