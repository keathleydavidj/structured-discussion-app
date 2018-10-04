import React, { Component } from 'react';
import './Thread.css'

export default class Thread extends Component {
  constructor(props) {
    super(props);

    this.select = this.select.bind(this);
  }

  select() {
    this.props.selectThread(this.props.thread);
  }

  render() {
    return ( 
      <div className="card thread-topic" onDoubleClick={this.select}>
        <div className="card-body">
          {this.props.thread.topic}
        </div>
      </div>
    );
  }
}