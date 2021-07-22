import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';


export default class TodoForm extends Component {
    state = {
        task : ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.task !== ""){
            this.props.addNewTask({ ...this.state, key: uuidv4() });
            this.setState({
                task: ""
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="New Task" id="task" name="task" onChange={this.handleChange} value={this.state.task} />
                <button>Add!</button>
            </form>
        )
    }
}
