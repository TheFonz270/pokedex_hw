import React from 'react'

const Screen = (pokemon, loading, pokemonPNG) => {
    return (
        <div id="image-container">
            <img src={pokemonPNG} alt={pokemon.name}/>
        </div>
    )
}

export default Screen;