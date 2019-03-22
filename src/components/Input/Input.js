import React, { Component } from "react"

class Input extends Component {
    state = {
        task_name: ''
    }
    onChange = (e) => this.setState({
        task_name: e.target.value
    })
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
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.task_name} onChange={this.onChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Input