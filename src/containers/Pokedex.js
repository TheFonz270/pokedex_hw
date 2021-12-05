import React, { useState, useEffect } from 'react';
import Arrows from '../components/Arrows'
import Screen from '../components/Screen'
import SearchBar from '../components/SearchBar'
import TextDisplay from '../components/TextDisplay'

const Pokedex = () => {

    const [pokemon, setPokemon] = useState('pikachu');
    const [loading, setLoading] = useState(true);
    const [pokemonType, setPokemonType] = useState("");

    const getPokemon = function () {
        setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          .then((res) => res.json())
          .then((pokemon) => setPokemon(pokemon))
          .then((pokemon) => setPokemonType(pokemon.types[0].type.name))
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      };

    useEffect(() => {
        getPokemon();
    },[])

    const goLeft = function (pokemon) {
        let num= pokemon.order - 1
        setPokemon(num)
    }

    const goRight = function (pokemon) {
        let num = pokemon.order + 1
        setPokemon(num)
    }

    const handleLeftClick = () => {
        goLeft(pokemon);
      };
    
    const handleRightClick = () => {
        goRight(pokemon);
      };

    if (loading) {
        return <p>Data is loading...</p>;
      }
    
    else {

    return (
            <>
            <h3>pokedex</h3>
            <div id='Pokedex'>
                <div id='left'>
                    <Screen pokemon = {pokemon} />
                    {/* <Arrows pokemon = {pokemon} getPokemon={getPokemon} goLeft={goLeft} goRight={goRight}/> */}
                    <div id='ArrowContainer'>
                        <div onClick={handleLeftClick} class="arrow-left"></div> 
                        <div onClick={handleRightClick} class="arrow-right"></div>
                    </div>
                </div>
                <div id='right'>
                    <SearchBar pokemon = {pokemon} getPokemon = {getPokemon} setPokemon={setPokemon}/>
                    <TextDisplay pokemon = {pokemon} loading={loading} pokemonType={pokemonType}/>
                </div>
            </div>
            </>
        )
    }
}

export default Pokedex;