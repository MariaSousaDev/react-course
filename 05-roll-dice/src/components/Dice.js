import React, { Component } from 'react'
import './Dice.scss'

export default class Dice extends Component {
    numberToText = (number) => {
        const text = ['one', 'two', 'three', 'four', 'five', 'six']
        return text[number-1]
    }

    render() {
        const {number} = {...this.props}
        return (
            <div className="Dice">
                <i className={`fas fa-dice-`+this.numberToText(number)}></i>
            </div>
        )
    }
}
