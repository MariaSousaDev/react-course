import React, { Component } from 'react'
import Color from './Color'
import './Container.scss'

export default class Container extends Component {
    static defaultProps = {
        noBoxes: 6,
        colors: ['#7A918D', '#93B1A7', '#99C2A2', '#C5EDAC', '#DBFEB8']
    }
    render() {
        const boxes = Array.from({length: this.props.noBoxes}).map(
            () => <Color colors={this.props.colors} />
        )
        return (
            <div className="Container">
                {boxes}
            </div>
        )
    }
}
