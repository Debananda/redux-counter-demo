import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../../store/actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.posts !== this.props.posts) {
      console.log(this.props.posts.length);
    }
    if (this.props.error && prevProps.error !== this.props.error) {
      console.error(this.props.error);
    }
  }
  render() {
    return (
      <div>{this.props.loading ? <h1>Loading ...</h1> : <h1>Posts</h1>}</div>
    );
  }
}

export default connect(
  state => ({
    posts: state.post.posts,
    error: state.post.error,
    loading: state.post.loading
  }),
  {
    loadPosts
  }
)(Posts);
