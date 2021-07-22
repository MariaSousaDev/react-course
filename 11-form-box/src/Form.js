import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class Form extends Component {
    state = {
        height: "",
        width: "",
        bg: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addBox({...this.state,key: uuidv4() })
        this.setState({
            height: "",
            width: "",
            bg: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="height">Height
                    <input type="text" id="height" name="height" value={this.state.height} onChange={this.handleChange} />
                </label>
                <label htmlFor="width">Width
                    <input type="text" id="width" name="width" value={this.state.width} onChange={this.handleChange} />
                </label>
                <label htmlFor="bg">Color
                    <input type="text" id="bg" name="bg" value={this.state.bg} onChange={this.handleChange} />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}
