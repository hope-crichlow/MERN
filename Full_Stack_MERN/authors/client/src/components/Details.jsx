import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const Details = () => {
	const { id } = useParams();
	const [author, setAuthorState] = useState(null);
	const [authors, setAuthors] = useState([]);

	
	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/author/` + id)
			.then((res) => setAuthorState(res.data))
			.then((res) => console.log("your author: ", res.data))
			.catch((err) => console.log(err));
	}, [id]);

	const removeFromDom = (authorID) => {
		setAuthors(authors.filter((author) => author._id !== authorID));
	};

	return (
		<div className="container px-4 ">
			<div className="row align-items-center justify-content-between gx-5 ">
				{author ? (
					<div>
						<h1>{author.name}</h1>

						<Link
							to={`/edit/${author._id}`}
							className="btn"
							style={{ marginRight: "5px" }}
						>
							Edit
						</Link>
						<DeleteButton
							authorID={author._id}
							successCallback={() => removeFromDom(author._id)}
						/>
					</div>
				) : (
					<h1>Loading....</h1>
				)}
			</div>
		</div>
	);
};

export default Details;
