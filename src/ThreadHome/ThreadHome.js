import React, { Component } from 'react';
import Thread from '../Thread';
import './ThreadHome.css';

export default class ThreadHome extends Component {
  render() {
    return (
      <div>
        { this.props.threads.map((thread, idx) => { 
          return <Thread key={idx} thread={thread} selectThread={this.props.selectThread} />
        })}
      </div>
    )
  }
}