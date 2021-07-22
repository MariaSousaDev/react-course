import React, { Component } from 'react'

export default class Todo extends Component {
    state = {
        isEditing: false,
        updateTask: this.props.task,
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        this.props.removeTask(this.props.id)
    }

    toggleForm = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    handleUpdate = (e) => {
        e.preventDefault()
        this.props.updateTask(this.props.id, this.state.updateTask)
        this.toggleForm()
    }   
    handleComplete = (e) => {
        this.props.completeTask(this.props.id)
    }

    render() {
        let result = ''
        if(this.state.isEditing){
            result = (
                <li>
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" name="updateTask" value={this.state.updateTask} onChange={this.handleChange}  />
                        <button onClick={this.handleUpdate}>Save</button>
                    </form>
                </li>
            )
        } else {
            result = (
                <li onClick={this.handleComplete} className={this.props.isComplete && 'Todo--complete' }>
                    {this.props.task}
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleClick}>Remove</button>
                </li>
            )
        }
        return result
    }
}
