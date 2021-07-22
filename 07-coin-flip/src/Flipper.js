import React, { Component } from 'react'
import Coin from "./Coin";
import './Flipper.scss'

export default class Flipper extends Component {
    state = {
        total: 0,
        totalFace: 0,
        totalTail: 0,
        coin: 0
    }

    getRandomCoin = () => {
        return Math.floor(Math.random() * 2)
    }

    flipDaCoin = () => {
        const coin = this.getRandomCoin()
        this.setState(curState => {
            return {
                coin : coin,
                total: curState.total + 1,
                totalFace: curState.totalFace + (coin === 1 ? 1 : 0),
                totalTail: curState.totalTail + (coin === 0 ? 1 : 0)
            }
        })
    }

    handleClick = () => {
        this.flipDaCoin()
    }

    render() {
        return (
            <div className="Flipper">
                <h1 className="Flipper--title">
                    Let's flip!
                </h1>
                <Coin coin={this.state.coin} />
                <button onClick={this.handleClick}>Flip!</button>
                <h4 className="Flipper--subtitle">
                    Out of {this.state.total}, there have been {this.state.totalFace} faces and {this.state.totalTail} tails
                </h4>
            </div>
        )
    }
}
