import React, { Component } from 'react';
import uuid from "uuid"

import Header from "../src/components/Header/Header.js"
import TodoContainer from "../src/components/TodoContainer/TodoContainer.js"
import Input from "../src/components/Input/Input.js"
import './App.css';

class App extends Component {
  //create constructor
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }
  //marks todos complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      } )
    })
  }
  //adds todos
  addTodo = (task_name) => {
    const newTodo = {
      id: uuid.v4(),
      task_name,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  //deletes todos
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
  render() {

    return (
      <div className="App">
        <Header/>
        <Input addTodo = {this.addTodo}/>
        <TodoContainer todos = {this.state.todos} completed={this.state.completed} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
