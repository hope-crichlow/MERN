import React from 'react';
import axios from 'axios';

const Main = () => {
    const axiosCall = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    return (
        <div>
            <button onClick={axiosCall}>Fetch Pokemon</button>
        </div>
    )
}

export default Main
