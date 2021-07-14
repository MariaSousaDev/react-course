import React, { Component } from 'react'
import Pokedex from './Pokedex'
import './Pokegame.scss'

export default class Pokegame extends Component {
    static defaultProps = {
        list: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }
    render() {
        let hand1 = []
        let hand2 = [...this.props.list]
        while (hand1.length < hand2.length) {
            let random = Math.floor(Math.random() * hand2.length);
            hand1.push(hand2.splice(random,1)[0])
        }

        let exp1 = hand1.reduce((exp, list) => exp + list.base_experience, 0)
        let exp2 = hand2.reduce((exp, list) => exp + list.base_experience, 0)

        let winner = exp1 > exp2 ? 1 : 2;
        
        return (
            <div className="Pokegame">
                <h1 className="Pokegame--winner">
                    The winner is Player {winner}
                </h1>
                <div className={`Pokegame--hand Pokegame--winner-${exp1 > exp2}`}>
                    <h2 className = "Pokegame--title">Player 1</h2>
                    <p className="Pokegame--exp">Total exp: {exp1} </p>
                    <Pokedex list={hand1} />
                </div>
                <div className={`Pokegame--hand Pokegame--winner-${exp1 < exp2}`}>
                    <h2 className = "Pokegame--title">Player 2</h2>
                    <p className="Pokegame--exp">Total exp: {exp2} </p>
                    <Pokedex list={hand2} />
                </div>
            </div>
        )
    }
}
