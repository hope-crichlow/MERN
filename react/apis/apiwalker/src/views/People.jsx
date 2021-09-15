import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const People = () => {
	const history = useHistory();

	const [person, setPerson] = useState({});
	const { person_id } = useParams();

	useEffect(
		() => {
			axios
				.get("https://swapi.dev/api/people/" + person_id) // making a GET request to Star Wars API
				.then((response) => setPerson(response.data)) // successful response
				.catch((error) => history.push("/error")); // unsuccessful response
		},
		[person_id] /*RE-EXECUTE OUR USEFFECT CALLBACK WHEN NECESSARY*/
	);
	return (
		<div>
			<fieldset>
				{/* <legend>People.jsx</legend> */}
				<h3>{person.name}</h3>
				{person ? (
					<div>
						<h3>Height: {person.height}</h3>
						<h3>Mass: {person.mass}</h3>
						<h3>Hair Color: {person.hair_color}</h3>
						<h3>Skin Color: {person.skin_color}</h3>
					</div>
				) : (
					<h1>LOADING.....</h1>
				)}
			</fieldset>
		</div>
	);
};
export default People;
