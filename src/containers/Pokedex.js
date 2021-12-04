import React from 'react';
import Arrows from '../components/Arrows'
import Screen from '../components/Screen'
import SearchBar from '../components/SearchBar'
import TextDisplay from '../components/TextDisplay'

const Pokedex = () => {


    return (
        <>
        <h3>pokedex</h3>
        <div id='Pokedex'>
            <div id='left'>
                <Screen />
                <Arrows />
            </div>
            <div id='right'>
                <SearchBar />
                <TextDisplay />
            </div>
        </div>
        </>
    )
}

export default Pokedex;