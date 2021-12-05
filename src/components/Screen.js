import React from 'react'

const Screen = (pokemon, loading) => {
    return (
        <div id="image-comtainer">
            <img src={pokemon.sprites?.front_default || "loading"} alt={pokemon.name}/>
        </div>
    )
}

export default Screen;