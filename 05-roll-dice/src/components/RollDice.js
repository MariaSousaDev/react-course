import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.scss'


export default class RollDice extends Component {
    state = {
        dicea: 1,
        diceb: 5,
        ctaText: 'Roll!'
    }

    generateRandomNum  = () => {
        return Math.floor(Math.random() * 6) + 1
    }

    newDice = (e) => {
        this.setState({
            dicea: this.generateRandomNum(),
            diceb: this.generateRandomNum(),
        })
    }



    render() {
        return (
            <div className="RollDice">
                <Dice number={this.state.dicea} />
                <Dice number={this.state.diceb} />
                <button onClick={this.newDice}>{this.state.ctaText}</button>
            </div>
        )
    }
}
