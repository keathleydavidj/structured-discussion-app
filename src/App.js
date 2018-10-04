import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay';
import ThreadHome from './ThreadHome';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedThread: null,
      threads: [
        {
          topic: 'Help!1!',
          posts: [
            'I am stuck',
          ]
        }
      ]
    }

    this.selectThread = this.selectThread.bind(this);
  }

  selectThread(thread) {
    this.setState({
      selectedThread: thread,
    })
  }

  render() {
    return this.state.selectedThread ?
      <ThreadDisplay thread={this.state.selectedThread} /> :
      <ThreadHome threads={this.state.threads} selectThread={this.selectThread} />;
  }
}
