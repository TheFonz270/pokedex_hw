import React from 'react'

const Screen = ({pokemon}) => {
    return (
        <div id="image-container">
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div>
    )
}

export default Screen;