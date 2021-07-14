import React, { Component } from 'react'

export default class Button extends Component {
    
    state = {
        number: 1,
        isSeven: false
    }
    
    randomNumber = e => {
        let num = Math.floor(Math.random() * this.props.maxNum) + 1
        this.setState({number:  num, isSeven: num === 7 ? true : false })
    }

    // showButton = () => {
    //     if(this.state.isSeven === 7){
    //         return 
    //     } else {
    //         return <
    //     }
    // }

    render() {
        
        return (
            <div>
                <h1>Number is {this.state.number}</h1>
                {this.state.isSeven
                    ? <h4>You are a winner!</h4>
                    : <button onClick={this.randomNumber}>Random Number</button>
                }
            </div>
        )
    }
}
