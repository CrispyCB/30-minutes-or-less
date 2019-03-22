import React, { Component } from 'react';
import Header from "../src/components/Header/Header.js"
import TodoContainer from "../src/components/TodoContainer/TodoContainer.js"
import Input from "../src/components/Input/Input.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Input/>
        <TodoContainer/>
      </div>
    );
  }
}

export default App;
