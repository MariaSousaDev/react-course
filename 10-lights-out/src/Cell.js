import React, { Component } from 'react'
import './Cell.scss'

export default class Cell extends Component {

    handleClick = (e) => {
        this.props.flipCellAround()
    }

    render() {
        const {isLit} = {...this.props}
        let light = isLit ? 'Cell--light' : ''
        return (
            <td className={`Cell ${light}`} onClick={this.handleClick} >
                
            </td>
        )
    }
}
