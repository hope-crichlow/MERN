import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const DeleteButton = (props) => {
	const history = useHistory();
	const { authorID, successCallback } = props;


	const deleteHandler = (e) => {
		axios
			.delete(`http://localhost:8000/api/author/${authorID}`)

			.then((res) => successCallback())
			.then((res) => history.push("/"))
			.catch((err) => console.log(err));
	};
	return (
		<button className="btn" onClick={deleteHandler}>
			Delete
		</button>
	);
};

export default DeleteButton;
