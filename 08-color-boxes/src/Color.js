import React, { Component } from 'react'
import { choice } from "./helpers";
import './Color.scss'

export default class Color extends Component {

    state = {
        color: choice(this.props.colors)
    }

    handleClick = () => {
        let newColor = choice(this.props.colors)
        while(newColor === this.state.color)
            newColor = choice(this.props.colors)
        this.setState({color: newColor})
        
    }

    render() {
        return (
            <div className="Color" style={{backgroundColor: this.state.color}} onClick={this.handleClick} >
            </div>
        )
    }
}
