import React, { Component } from 'react'
import './Ball.scss'

export default class Ball extends Component {
    render() {
        const {number} = {...this.props}
        return (
            <div className="Ball">
                {number}
            </div>
        )
    }
}
