import React from 'react'

const SearchBar = ({pokemon, setPokemon, getPokemon }) => {

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    }

    return (
        <form id='SearchContainer' onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} placeholder='PokeSearch'/>
        </form>
        )
}

export default SearchBar;