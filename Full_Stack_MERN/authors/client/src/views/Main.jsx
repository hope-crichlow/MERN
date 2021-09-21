// import React from "react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Main = () => {
	const [authors, setAuthors] = useState([]);
	// const [state, setState] = useState(false);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/authors")
			.then((res) => setAuthors(res.data))
			.catch((err) => console.log(err));
	}, []);

	const removeFromDom = (authorID) => {
		setAuthors(authors.filter((author) => author._id !== authorID));
	};
	return (
		<div>
			<fieldset>
				<legend>Main.jsx</legend>

				<nav>
					<Link className="btn" to={"/new"} style={{ marginRight: "5px" }}>
						Add an author
					</Link>
					<Link className="btn" to={"/"}>
						Home
					</Link>
				</nav>
			</fieldset>
		</div>
	);
};

export default Main;
