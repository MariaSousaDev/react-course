import React, { Component } from 'react'
import Cell from './Cell'
import './Board.scss'

export default class Board extends Component {
    static defaultProps = {
        row: 4,
        column: 5,
        chance: .3
    }

    constructor(props) {
        super(props);
        this.state = {
            board: this.createBoard(),
            hasWon: false
        };
    }


    createBoard = () => {
        let board = []
        for (let i = 0; i < this.props.row; i++) {
            let newRow = []
            for (let j = 0; j < this.props.column; j++) {
                newRow.push(Math.random() <= this.props.chance)
            }
            board.push(newRow)
        }
        return board
    }


    flipCellAround = (coord) => {
        console.log(coord);
        let [i,j] = coord.split('-').map(Number)
        let board = this.state.board
        let {row,column} = this.props

        function flipCell(i, j) {
            if (i >= 0 && i < row && j >= 0 && j < column) {
                board[i][j] = !board[i][j]
            }
        }

        // for (let x = 0; x < row; x++) {
        //     for (let y = 0; y < column; y++) {
        //         if(y >= j-1 && y <= j+1){
        //             if(x >= i-1 && x <= i+1){
        //                 if(x === i || y === j){
        //                     // console.log(x,y);
        //                     flipCell(x,y)
        //                 }

        //             }
        //         }
        //     }
        // }

        flipCell(i,j)
        flipCell(i-1,j)
        flipCell(i+1,j)
        flipCell(i,j-1)
        flipCell(i,j+1)

        let hasWon = board.every(
                        row => row.every(
                            cell => !cell
                        )
                    )
        

        this.setState({
            board:board,
            hasWon: hasWon
        })
    }



    render() {
        if(this.state.hasWon){
            return <h1>You won!!</h1>
        }

        let tableBoard = []

        for (let i = 0; i < this.props.row; i++) {
            let row = []
            for (let j = 0; j < this.props.column; j++) {
                let coord = `${i}-${j}`
                row.push(<Cell key={coord} isLit={this.state.board[i][j]} flipCellAround={() => this.flipCellAround(coord)} />)
            }
            tableBoard.push(<tr key={i}>{row}</tr>)
        }

        return (
            <div className="Board">
                <h1 className="Board--title">Lights Out</h1>
                <table className="Board--container">
                    <tbody>
                        {tableBoard}
                    </tbody>
                </table>

            </div>
        )
    }
}
