import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";

const ListOfObjects = (props) => {
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
				<legend>ListOfObjects.jsx</legend>

				<div>
					<table>
						<thead>
							<tr>
								<th>Author</th>
								<th>Actions Avaliable</th>
							</tr>
						</thead>

						<tbody>
							{authors.map((author, i) => {
								return (
									<tr key={i}>
										<td>
											<Link
												to={`/${author._id}`}
												className="btn"
												style={{ marginRight: "5px" }}
											>
												{author.name}
											</Link>
										</td>
										<td>
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
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</fieldset>
		</div>
	);
};

export default ListOfObjects;
