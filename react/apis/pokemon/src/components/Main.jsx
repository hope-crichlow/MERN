import React, { useState } from "react";
import axios from "axios";

const Main = () => {
	const [state, setState] = useState();

	const axiosCall = () => {
		// MAKE GET REQUEST TO POKEMON API
		axios
			.get("https://pokeapi.co/api/v2/pokemon/?limit=900")
			// HANDLE SUCCESSFUL RESPONSE
			.then((response) => setState(response.data.results))
			// HANDLE UNSUCCESSFUL RESPONSE
			.catch((error) => console.log(error));
            
	};

    const listStyle = {
        'textAlign': "center",
        'list-style': "inside",
    };
	return (
		<div>
			<button className="btn" onClick={axiosCall}>Fetch Pokemon</button>
			{state ? (
				<ul style={listStyle}>
					{state.map((pokemon, i) => (
						<li key={i}>{pokemon.name}</li>
					))}
				</ul>
			) : (
				<h1>Wanna catch some Pokemon?</h1>
			)}
		</div>
	);
};

export default Main;
