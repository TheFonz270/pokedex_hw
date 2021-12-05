import React from 'react'

const TextDisplay = ({pokemon, pokemonType}) => {


    return (
        <div id='TextContainer'>
            <p>Name: {pokemon.name}</p>
            <p>Type: {pokemonType}</p>
            <p>Height: {Math.round(pokemon.height * 3.9)}"</p>
            <p>Weight: {Math.round(pokemon.weight / 4.3)} lbs</p>
        </div>
        
    )}
    
    

export default TextDisplay;