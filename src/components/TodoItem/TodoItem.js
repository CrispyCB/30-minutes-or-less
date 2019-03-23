import React, { Component } from "react"
import "./TodoItem.css"

class TodoItem extends Component {
    render() {
        //deconstruct task_name and id from this.props.todoitem so that they can be used as individual property names.
        const {task_name, id} = this.props.todoitem
        return (
            <div className="TodoBox">
                {/*passes this and id to the markComplete method so that the correct item can be marked complete */}
                <input type="checkbox" className="InputCheckbox" onChange={this.props.markComplete.bind(this, id)}/>
                {/* passes task_name in as string interpolation thanks to the deconstruction above. */}
                <h3 className="TaskName">{task_name}</h3>
                {/* passes this and id to the delTodo button so that it is invoked onChange (when the X button is clicked) */}
                <button onClick={this.props.delTodo.bind(this, id)}>X</button>
            </div>
        )
    }
}
export default TodoItem