import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.scss'


export default class RollDice extends Component {
    static defaultProps = {
        text: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    state = {
        dicea: 'one',
        diceb: 'five',
        ctaText: 'Roll!', 
        rolling: false
    }

    generateRandomNum  = () => {
        return Math.floor(Math.random() * this.props.text.length)
    }

    generateTextNumber  = () => {
        return this.props.text[this.generateRandomNum()]
    }

    newDice = (e) => {
        this.setState({
            dicea: this.generateTextNumber(),
            diceb: this.generateTextNumber(),
            rolling: true
        })
        setTimeout(() => {
            this.setState({
                rolling:false
            })
        }, 1000);
    }



    render() {
        return (
            <div className="RollDice">
                <Dice number={this.state.dicea} rolling={this.state.rolling}/>
                <Dice number={this.state.diceb} rolling={this.state.rolling}/>
                <button onClick={this.newDice} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : this.state.ctaText}
                </button>
            </div>
        )
    }
}
