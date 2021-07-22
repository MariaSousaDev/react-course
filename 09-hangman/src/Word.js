import React, { Component } from 'react'

export default class Word extends Component {

    render() {
        return (
            <button
                value={this.props.value}
                onClick={this.props.handleGuess}
                disabled={this.props.disabled}
            >
                {this.props.value}
            </button>
        )
    }
}
