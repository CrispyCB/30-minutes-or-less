import React, { Component } from "react"
import TodoItem from "../../../src/components/TodoItem/TodoItem.js"
import propTypes from "prop-types"

import "./TodoContainer.css"

class TodoContainer extends Component {
    render () {
        {/* For each of the todos passed in as properties, create a new array of TodoItems with the following properties and methods. */}
        return this.props.todos.map((todo)=><TodoItem key={todo.id} todoitem={todo}  markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>)
    }   
}
TodoContainer.propTypes = {
    todos: propTypes.array.isRequired
}
export default TodoContainer