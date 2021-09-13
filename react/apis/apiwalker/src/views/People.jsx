import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const People = () => {
	const history = useHistory();

	const [person, setPerson] = useState({});
	const { person_id } = useParams();
	return (
		<div>
			<fieldset>
				<legend>People.jsx</legend>
				<h3>Person ID: {person_id}</h3>
			</fieldset>
		</div>
	);
};
export default People;
