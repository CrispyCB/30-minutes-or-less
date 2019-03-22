import React, { Component } from "react"
import "./TodoItem.css"

class TodoItem extends Component {
    render() {
        return(
            <div className="TodoBox">
                <input type="checkbox" className="InputCheckbox"/>
                <p className="TaskName">This is a placeholder task</p>
            </div>
        )
    }
}
export default TodoItem