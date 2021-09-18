import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const Form = () => {
	// const history = useHistory();
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

	const onSubmitHandler = (e) => {
		e.preventDefault();
		// Post request to create a new person
		axios
			.post("http://localhost:8000/api/product/new", {
				title,
				price,
				description,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<div className="container px-4 ">
			<fieldset>
				<legend>Form.jsx</legend>
				<form onSubmit={onSubmitHandler}>
					<div>
						<label className="form-label">Title: </label>
						<input
							className="form-control"
							type="text"
							onChange={(e) => setTitle(e.target.value)}
							value={title}
						/>
						
					</div>
					<div>
						<label className="form-label">Price: </label>
						<input
							className="form-control"
							type="number"
							onChange={(e) => setPrice(e.target.value)}
							value={price}
						/>
					
					</div>
					<div>
						<label className="form-label">Description: </label>
						<input
							className="form-control"
							type="text"
							onChange={(e) => setDescription(e.target.value)}
							value={description}
						/>
						
					</div>
					<button type="submit" className="btn form-control">Create</button>
				</form>
			</fieldset>
		</div>
	);
};

export default Form;
