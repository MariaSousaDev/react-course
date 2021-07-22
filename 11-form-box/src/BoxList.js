import React, { Component } from 'react'
import Box from './Box'
import Form from './Form'

export default class BoxList extends Component {
    state = {
        boxes: []
    }

    removeBox = (key) => {
        this.setState({
            boxes: this.state.boxes.filter(
                box => box.key !== key
                )
        })
    }

    newBox = (box) => {
        this.setState({
            boxes: [...this.state.boxes, box]
        })
    }

    render() {
        const boxes = this.state.boxes.map(box=>(
            <Box key={box.key} id={box.key} id={box.key} width={box.width} height={box.height} bg={box.bg} removeBox={this.removeBox}  />
        ))
        return (
            <div>
                <h1>Color Box Maker</h1>
                <Form addBox={this.newBox} />
                <br/><br/><br/><br/>
                {boxes}
            </div>
        )
    }
}
