import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
let api_key = PROCESS.env.REACT_APP_API_KEY;
let api_secret = PROCESS.env.REACT_APP_API_SECRET;

const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'photo-sharing-app'});

class App extends Component {
  render() {
    return (
      <CloudinaryContext cloudName="photo-sharing-app" apiKey={api_key} apiSecret={api_secret}>
      <div className="App">

      </div>
      </CloudinaryContext>
    );
  }
}

export default App;
