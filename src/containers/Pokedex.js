import React, { useState, useEffect } from 'react';
import Arrows from '../components/Arrows'
import Screen from '../components/Screen'
import SearchBar from '../components/SearchBar'
import TextDisplay from '../components/TextDisplay'

const Pokedex = () => {

    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    // const [pokemonType, setPokemonType] = useState("electric");
    // const [pokemonType2, setPokemonType2] = useState(null);
    // const [pokemonPNG, setPokemonPNG] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");

    let mon = 'pikachu'

    const getPokemon = function (mon) {
        // setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${mon}`)
          .then((res) => res.json())
          .then((pokemon) => {
              setPokemon(pokemon)
            //   setPokemonType(pokemon.types[0].type.name)
            //   setPokemonPNG(pokemon.sprites.front_default)
            //   if (pokemon.types[1]) {
            //     setPokemonType2(pokemon.types[1].type.name)
            //   }
            //   if (!pokemon.types[1]) {
            //       setPokemonType2(null)
            //   }
          })

          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      };

    useEffect(() => {
        getPokemon(mon);
    },[])

    const goLeft = function (pokemon) {
        let num= pokemon.id - 1
        if (num === 0) {
            num = 898
        }
        getPokemon(num)
    }

    const goRight = function (pokemon) {
        let num = pokemon.id + 1
        if (num === 899) {
            num = 1
        }
        getPokemon(num)
    }

    // const handleLeftClick = () => {
    //     goLeft(pokemon);
    //   };
    
    // const handleRightClick = () => {
    //     goRight(pokemon);
    //   };

    if (!pokemon.name) {
        return <p>Data is loading...</p>;
      }
    

    return (
            <>
            <h3>pokedex</h3>
            <div id='Pokedex'>
                <div id='left'>
                    <Screen pokemon = {pokemon} />
                    <Arrows pokemon = {pokemon} getPokemon={getPokemon} goLeft = {goLeft} goRight = {goRight}/>      
                </div>
                <div id='right'>
                    <SearchBar pokemon = {pokemon} getPokemon = {getPokemon} setPokemon = {setPokemon}/>
                    <TextDisplay pokemon = {pokemon} loading = {loading} />
                </div>
            </div>
            </>
        )
    }


export default Pokedex;