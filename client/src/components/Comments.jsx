import React, {Component} from 'react';
import { Image, CloudinaryContext } from 'cloudinary-react';
//cause we might  need to render the user's picture...
import {createComment, getPostComments} from '../services/services';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.currentUser,
      postId: props.postId,
      comments: [],
      commentField: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    let comments = await getPostComments(this.state.postId);
    this.setState(prevState => ({
      ...prevState,
      comments: comments
    }));
  }

  handleChange(ev) {
    let {value} = ev.target;
    this.setState(prevState => (
      {
        ...prevState,
        commentField: value
      }
    ))
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    let comment = await createComment(
      this.state.currentUser.id,
      this.state.postId,
      this.state.commentField);
    this.setState(prevState => ({
      ...prevState,
      comments: [
        ...prevState.comments,
        comment
      ]
    }))
  }

  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            name='commentField'
            value={this.state.commentField}
            onChange={this.handleChange}
            />
          <button type='submit' onClick={this.handleSubmit}>Submit</button>
        </form>
        {this.state.comments.map(comment => (
          <div>
            <p>
              {comment.text}
            </p>
          </div>
        ))}
      </div>
    )
  }

}


export default Comments;
