import React from 'react';
import './Post.css';

const Post = (props) => (
  <div className="card post-body">
    <div className="card-body">
      {props.postBody}
    </div>
  </div>
)

export default Post;