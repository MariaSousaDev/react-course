import React, { Component } from 'react'
import Ball from './Ball'
import './Loterry.scss'

export default class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNumber: 40
    }

    state = {
        number: Array.from({length: this.props.maxBalls})
    }

    generateNewNumber = () => {
        return Math.floor(Math.random() * this.props.maxNumber) + 1;
    }

    generateNewSet = () => {

        this.setState(
            curState =>({
                number: curState.number.map(
                    n => this.generateNewNumber()
                )
            })
        )
    }

    render() {
        const { title, maxBalls, maxNumber} = {...this.props}
        
        return (
            <div className="Lottery">
                <h2 className="Lottery--title">{title}</h2>
                <div className="Lottery--balls">
                {
                    this.state.number.map( x =>
                        <Ball number={x} />
                    )
                }
                </div>
                <button onClick={this.generateNewSet}>Generate</button>
            </div>
        )
    }
}
