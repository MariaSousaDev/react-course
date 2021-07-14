import React, { Component } from 'react'
import './Pokecard.scss'
const imageUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

export default class Pokecard extends Component {
    render() {
        const {pokemon} = this.props;
        const {id, name, type, base_experience} = pokemon;
        let image = `${imageUrl}${padToThree(id)}.png`
        
        // function getImage(){
        //     let counter = id;
        //     for (let i = counter.toString().length; i < 3; i++) {
        //         counter = "0"+counter;
        //     }
        //     return imageUrl+counter+".png";
        // }

        return (
            <div className={`Pokecard Pokecard--${type}`}>
                {/* <img src={getImage()} alt="" className="Pokecard--image" /> */}
                <img src={image} alt="" className="Pokecard--image" />
                <h2 className="Pokecard--name">{name}</h2>
                <p className="Pokecard--exp"> Exp: {base_experience} </p>
            </div>
        )
    }
}
