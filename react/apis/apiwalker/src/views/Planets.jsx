import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Planets = () => {
	const history = useHistory();

	const [planet, setPlanet] = useState({});
	const { planet_id } = useParams();

	useEffect(
		() => {
			axios
				.get("https://swapi.dev/api/planets/" + planet_id + "/") // making a GET request to Star Wars API
				.then((response) => setPlanet(response.data)) // successful response
				.catch((error) => history.push("/error")); // unsuccessful response
		},
		[planet_id] /*RE-EXECUTE OUR USEFFECT CALLBACK WHEN NECESSARY*/
	);
	return (
		<div>
			<fieldset>
				<legend>Planets.jsx</legend>
				<h3>Planet ID: {planet_id}</h3>
				{planet ? (
					<div>
						<h1>Climate: {planet.climate}</h1>
						<h2>Terrain: {planet.terrain}</h2>
						<h2>Surface Water: {planet.surface_water}</h2>
						<h2>Population: {planet.population}</h2>
					</div>
				) : (
					<h1>LOADING.....</h1>
				)}
			</fieldset>
		</div>
	);
};

export default Planets;
