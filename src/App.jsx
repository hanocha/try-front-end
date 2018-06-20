import React, { Component } from 'react';
import { TodoList } from "./TodoList";
import './App.css';

class App extends Component {
  render() {
    return (
      <TodoList items={[
        { id: 1, body: "test1" },
        { id: 2, body: "test2" },
      ]} />
    );
  }
}

export default App;
