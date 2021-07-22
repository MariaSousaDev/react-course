import React, { Component } from 'react'

export default class Box extends Component {

    handleClick = (e) => {
        this.props.removeBox(this.props.id)
    }

    render() {
        return (
            <div 
                onClick={this.handleClick}
                style={{ 
                    width: `${this.props.width}em`, 
                    height: `${this.props.height}em`, 
                    backgroundColor: this.props.bg }}
            />
        )
    }
}
