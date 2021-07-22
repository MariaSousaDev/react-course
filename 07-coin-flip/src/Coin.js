import React, { Component } from 'react'
import './Coin.scss'

export default class Coin extends Component {
    static defaultProps = {
        images: [
            'https://image.flaticon.com/icons/png/512/1369/1369860.png',
            'https://image.flaticon.com/icons/png/512/3213/3213595.png'
        ]
    }
    render() {
        return (
            <div className="Coin">
                <img src={this.props.images[this.props.coin]} alt="" />
            </div>
        )
    }
}
