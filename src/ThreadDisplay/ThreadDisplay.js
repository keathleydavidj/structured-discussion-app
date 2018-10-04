import React, { Component } from 'react';
import Post from '../Post';
import PostEditor from '../PostEditor';

export default class ThreadDisplay extends Component {
  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this); 
  }

  addPost(newPostBody) {
    this.props.thread.posts.push(newPostBody);
  }

  render() {
    return (
      <div>
        { this.props.thread.posts.map((postBody, idx) => {
          return <Post key={idx} postBody={postBody} />
        })}

        <PostEditor addPost={this.addPost} />
      </div>
    );
  }
}