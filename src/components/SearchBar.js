import React from 'react'

const SearchBar = ({pokemon, setPokemon, getPokemon }) => {

    let search = ""
    
    const handleChange = (e) => {
        search = (e.target.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon(search);
    }

    return (
        <form id='SearchContainer' onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} placeholder='PokeSearch'/>
        </form>
        )
}

export default SearchBar;