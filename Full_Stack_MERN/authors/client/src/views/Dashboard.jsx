import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import ListOfObjects from "../components/ListOfObjects";

const Dashboard = () => {
	const [authors, setAuthors] = useState([]);
	// const [state, setState] = useState(false);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/authors")
			.then((res) => setAuthors(res.data))
			.catch((err) => console.log(err));
	}, []);

	// const deleteHandler = (id) => {
	// 	axios
	// 		.delete(`http://localhost:8000/api/author/${id}`)
	// 		.then((res) => setAuthors((prev) => prev.filter((p) => p._id !== id)))
	// 		.catch((err) => console.log(err));
	// };
	return (
		<div>
			<fieldset>
				<legend>Dashboard.jsx</legend>
				<div>
					<h3 className="greeting">We Have Quotes By:</h3>
				</div>
				<ListOfObjects authors={authors} />
				<div></div>
			</fieldset>
		</div>
	);
};

export default Dashboard;
