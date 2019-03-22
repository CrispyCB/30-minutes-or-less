import React, { Component } from "react"
import "./TodoItem.css"

class TodoItem extends Component {
    render() {
        const {task_name, id} = this.props.todoitem
        return (
            <div className="TodoBox">
                <input type="checkbox" className="InputCheckbox" onChange={this.props.markComplete.bind(this, id)}/>
                <h3 className="TaskName">{task_name}</h3>
                <button onClick={this.props.delTodo.bind(this, id)}>X</button>
            </div>
        )
    }
}
export default TodoItem