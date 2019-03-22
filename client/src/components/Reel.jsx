import React, {Component} from 'react';
import Post from './Post';
import {getUsers} from '../services/services';
class Reel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    let resp = await getUsers();
    this.setState({
      users: resp
    })
  }

  render() {
    return (
      <main className="">
        {this.props.reelPosts && this.props.reelPosts.map(post => {
          return (<Post
            key={post.id}
            currentUser={this.props.currentUser}
            publicId={post.publicId}
            postId={post.id}
            title={post.title}
            userId={post.userId}
            userInfo={this.state.users.filter(user => (user.id === post.userId))[0]}
            description={post.description}
            post={post}
            handleEditChange={this.props.handleEditChange}
            handleEditSubmit={this.props.handleEditSubmit}
            setCurrentPost={this.props.setCurrentPost}
            currentPost={this.props.currentPost}
            handleDelete={this.props.handleDelete}
            />)}
          )}
        </main>
        );
      };
}
export default Reel;
