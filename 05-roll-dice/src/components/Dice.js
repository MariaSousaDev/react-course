import React, { Component } from 'react'
import './Dice.scss'

export default class Dice extends Component {
    render() {
        const {number,rolling} = {...this.props}
        return (
            <div className={`Dice ${rolling ? "Dice--rolling" : ""}`}>
                <i className={`fas fa-dice-${number}`}></i>
            </div>
        )
    }
}
