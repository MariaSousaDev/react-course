import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'


export default class TodoList extends Component {
    state = {
        todos: [
            {task: "Buy 2 fish", key:1, isComplete:false},
            {task: "Sell the switch", key:2, isComplete:false}
        ]
    }

    newTask = (task) => {
        this.setState({
            todos: [...this.state.todos, task]
        })
    }

    updateTask = (key,updatedTask) => {
        const updatedTodos = this.state.todos.map(
            todo=> {
                if(todo.key === key)
                    return {...todo, task: updatedTask}
                else 
                    return todo
            }
        )
        this.setState({ todos: updatedTodos})
    }

    completeTask = (key) => {
        const updatedTodos = this.state.todos.map(
            todo=> {
                if(todo.key === key)
                    return { ...todo, isComplete: !todo.isComplete}
                else 
                    return todo
            }
        )
        this.setState({ todos: updatedTodos})
    }

    removeTask = (key) => {
        this.setState({
            todos: this.state.todos.filter(
                task => task.key !== key
            )
        })
    }

    render() {
        const list = this.state.todos.map(todo => {
            return <Todo key={todo.key} id={todo.key} task={todo.task} removeTask={this.removeTask} updateTask={this.updateTask} completeTask={this.completeTask} isComplete={todo.isComplete} />
        })

        return (
            <div>
                <h1>This is a todo list!</h1>
                <h4>Welcome ~</h4>
                <br /><br /><br />
                <ul>
                    {list}
                </ul>
                <TodoForm addNewTask={this.newTask} />
            </div>
        )
    }
}
