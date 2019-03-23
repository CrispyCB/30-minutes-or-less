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
      //sets the state of todos as a blank array
      todos: []
    }
  }
  //marks todos complete
  //for the id passed into markComplete...
  markComplete = (id) => {
    //set the state of the todo...
    this.setState({
      //by mapping over each todo in the list...
      todos: this.state.todos.map(todo => {
        //and checking if the given todo.id matches the id passed in...
        if(todo.id === id){
          //if it does, mark it complete (green checkmark)
          todo.completed = !todo.completed
        }
        //passes the todo back to [todos]
        return todo
      } )
    })
  }
  //adds todos
  //for the task_name passed into addTodo
  addTodo = (task_name) => {
    //create a new Todo with a UUID, that task name, and then set completed to false.
    const newTodo = {
      id: uuid.v4(),
      task_name,
      completed: false
    }
    //then pass it back up to state.
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  //deletes todos
  //for the id passed into delTodo...
  delTodo = (id) => {
    //set the state of that id...
    this.setState({
      //by creating a new array where that id doesn't exist.
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
  render() {

    return (
      <div className="App">
        <Header/>
        {/*Push the addTodo method to the input component as a property called addTodo */}
        <Input addTodo = {this.addTodo}/>
        {
          /*
          pass the full list of todos to TodoContainer via state.
          set the state of each todo by checking the `completed` property of each todo.
          pass the markComplete method to the TodoContainer as a property called markComplete.
          pass the delTodo method to the TodoContainer as a property called delTodo.
          */
        }
        <TodoContainer todos = {this.state.todos} completed={this.state.completed} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
