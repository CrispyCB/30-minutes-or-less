import React, { Component } from "react"
import TodoItem from "../../../src/components/TodoItem/TodoItem.js"

class TodoContainer extends Component {
    render() {
        return (
            <div>
                <TodoItem/>
                <TodoItem/>
            </div>
        )
    }
}
export default TodoContainer