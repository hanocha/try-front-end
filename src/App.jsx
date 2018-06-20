import React, { Component } from 'react';
import { Todo } from "./Todo";
import './App.css';

class App extends Component {
  render() {
    return (
      <Todo body="hello component!" />
    );
  }
}

export default App;
