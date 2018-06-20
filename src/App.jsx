import React, { Component } from 'react';
import axios from "axios";
import { TodoList } from "./TodoList";
import './App.css';

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios.get(
      "/todos",
      {
        baseURL: "https://virtserver.swaggerhub.com/kielze/TODO-API/1.0.0",
        headers: {
          'Accept': 'application/json'
        },
      },
    )
      .then(response => {
        console.log(response);
        console.log(this.state);
        this.setState({
          todos: response.data.map(todo => {
            return ({ id: todo.id, body: todo.text, title: todo.title });
          })
        })
      });
  }

  render() {
    return (
      <TodoList items={this.state.todos} />
    );
  }
}

export default App;
