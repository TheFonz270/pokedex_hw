import React from 'react'

const TextDisplay = ({pokemon}) => {

    // if(!pokemon.types){
    //     return "Loading...."
    // }

    let pokemonType2 = null

    if (pokemon.types[1]) {
            pokemonType2 = (pokemon.types[1].type.name)
          }
    if (!pokemon.types[1]) {
            pokemonType2 =null
          }

    return (
        <div id='TextContainer'>
            <p>Name: {pokemon.name}</p>
            <p>Type: {pokemon.types[0].type.name} {pokemonType2}</p>
            <p>Height: {Math.round(pokemon.height * 3.9)}"</p>
            <p>Weight: {Math.round(pokemon.weight / 4.3)} lbs</p>
        </div>
        
    )}
    
    

export default TextDisplay;