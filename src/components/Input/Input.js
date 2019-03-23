import React, { Component } from "react"

class Input extends Component {
    //set the state as a blank task name.
    state = {
        task_name: ''
    } 
    //creates the onChange method
    //onChange, set the state of the task_name to the value of the event.
    onChange = (e) => this.setState({
        task_name: e.target.value
    })
    //when the form is submitted, pass the task_name from state to the addTodo method, which passes it up
    //to TodoContainer to create a new TodoItem
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.task_name);
        this.setState({
            task_name: ""
        })
    }
    render() {
        return (
            <div>
                {/*calls the onSubmit method described above */}
                <form onSubmit={this.onSubmit}>
                    {/*sets the value to the task_name defined in state, so that it can be updated via onChange */}
                    <input type="text" value={this.state.task_name} onChange={this.onChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Input