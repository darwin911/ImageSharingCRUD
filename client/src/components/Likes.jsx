import React, {Component} from 'react';
import { Image, CloudinaryContext } from 'cloudinary-react';
import {createLike, getPostLikes} from '../services/services';
let api_key = process.env.REACT_APP_API_KEY;
let api_secret = process.env.REACT_APP_API_SECRET;

class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.currentUser,
      postId: props.postId,
      likes: [],
      isThisLiked: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    let likes = await getPostLikes(this.state.postId);
    this.setState(prevState => ({
      ...prevState,
      likes: likes
    }));
    if (this.state.currentUser !== null) {
      if (likes.some(like => (parseInt(like.userId) === this.state.currentUser.id))) {
        this.setState({
          isThisLiked: true
        });
      }
    }  
  }

  async handleChange() {
    let resp = await createLike(
      this.state.currentUser.id,
      this.state.postId
    );
    this.setState(prevState => ({
      ...prevState,
      isThisLiked: true,
      likes: [
        ...prevState.likes,
        resp
      ]
    }));
  }

  render() {
    return (
      <CloudinaryContext
      className="likes"
      cloudName='photo-sharing-app'
      apiKey={api_key}
      apiSecret={api_secret}>
 
        <span>
        {this.state.isThisLiked ?
        `Liked by you and ${this.state.likes.length - 1} other users` :
        `Liked by ${this.state.likes.length} users`}
        </span>
        {this.state.isThisLiked ?
          <Image publicId='heart-solid' width='20px' /> :
          <Image publicId='heart-regular' width='20px' onClick={this.handleChange}/>
        }
      </CloudinaryContext>
    )
  }

}


export default Likes;
