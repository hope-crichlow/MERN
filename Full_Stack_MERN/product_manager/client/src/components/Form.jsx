import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const Form = ({ createNewProduct }) => {
	// const history = useHistory();

	const [formState, setFormState] = useState({
		title: "",
		price: 0,
		description: "",
	});

	const [validState, setValidState] = useState({});

	const changeHandler = (e) => {
		const { name, value } = e.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		createNewProduct(formState)
    // CLEAR ERROR MESSAGES 
      .then(()=> setValidState(true))
    // CLEAR FORM DATA 
			.then(() => {
				setFormState({
					title: "",
					price: 0,
					description: "",
				});
			})
			.catch((err) => {
				console.log("CATCH IT: ", err.response.data);
				const { errors } = err.response.data;
				let errorObj = {};
				for (let [key, value] of Object.entries(errors)) {
					errorObj[key] = value.message;
				}
				console.log(errorObj);
				setValidState(errorObj);
			});
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
							name="title"
							type="text"
							onChange={changeHandler}
							value={formState.title}
						/>
						{validState.title ? (
							<p style={{ color: "red" }}>{validState.title}</p>
						) : null}
					</div>
					<div>
						<label className="form-label">Price: </label>
						<input
							className="form-control"
							name="price"
							type="number"
							onChange={changeHandler}
							value={formState.price}
						/>
						{validState.price ? (
							<p style={{ color: "red" }}>{validState.price}</p>
						) : null}
					</div>
					<div>
						<label className="form-label">Description: </label>
						<input
							className="form-control"
							name="description"
							type="text"
							onChange={changeHandler}
							value={formState.description}
						/>
						{validState.description ? (
							<p style={{ color: "red" }}>{validState.description}</p>
						) : null}
					</div>
					<button type="submit" className="btn form-control">
						Create
					</button>
				</form>
			</fieldset>
		</div>
	);
};

export default Form;
