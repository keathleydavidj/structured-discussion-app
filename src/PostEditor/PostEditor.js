import React, { Component } from 'react';
import './PostEditor.css';

export default class PostEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPostBody: '',
    };

    this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this); 
    this.createPost = this.createPost.bind(this); 
  }

  handlePostEditorInputChange(ev) {
    this.setState({
      newPostBody: ev.target.value
    })
  }

  createPost() {
    this.props.addPost(this.state.newPostBody);
    this.setState({
      newPostBody: '',
    })
  }

  render() {
    return (
      <div className="card post-editor">
        <div className="card-body">
          <textarea className="form-control post-editor-input" onChange={this.handlePostEditorInputChange} />
          <button className="btn btn-success post-editor-button" onClick={this.createPost}>Post</button>
        </div>
      </div>
    )
  }
}