import React, { Component } from 'react';
// import {
//   BrowserRouter as Router, Route, NavLink, Switch,
// } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MiniPost from '../components/miniPost';
import { fetchPosts, fetchPost, deletePost } from '../actions';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = { isEditing: 0 };
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log('logging posts: ');
    console.log(this.props.posts);
    console.log(this.props.posts[0]);
    if (this.props.posts[0] === undefined) {
      return (<div>Loading...</div>);
    }
    const posts = this.props.posts.map(post => (
      <MiniPost
        key={post.id}
        post={post}
        history={this.props.history}
        deletePost={this.props.deletePost}
      />
    ));
    // this.props.fetchPost(this.props.posts[0].id, this.props.history);
    if (this.state.isEditing) { console.log('hi'); }
    return (<div>Welcome to posts {posts}</div>);
  }
}

const mapStateToProps = state => (
  {
    posts: state.posts,
  }
);


export default withRouter(connect(mapStateToProps, { fetchPosts, fetchPost, deletePost })(Posts));
