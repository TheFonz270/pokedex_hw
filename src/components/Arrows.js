import React from 'react'

const Arrows = ({pokemon, getPokemon, goLeft, goRight}) => {

    const handleLeftClick = () => {
        goLeft(pokemon);
      };
    
    const handleRightClick = () => {
        goRight(pokemon);
      };


    return (

      <div id='ArrowContainer'>
        <div onClick={handleLeftClick} class="arrow-left"></div> 
        <div onClick={handleRightClick} class="arrow-right"></div>
    </div>
    )
    }

export default Arrows;