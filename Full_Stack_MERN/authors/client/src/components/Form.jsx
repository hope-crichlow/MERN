import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Form = () => {
	const history = useHistory();

	const [formState, setFormState] = useState({
		name: "",
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
		axios
			.post("http://localhost:8000/api/author/new", formState)
			.then((res) => console.log("SUCCESS", res))
			// CLEAR ERROR MESSAGES
			.then(() => setValidState(true))
			// // CLEAR FORM DATA
			.then(() => {
				setFormState({
					name: "",
				});
			})
			.then((res) => {
				history.push("/");
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
		<div>
			<fieldset>
				<legend>Form.jsx</legend>
				<form onSubmit={onSubmitHandler}>
					<div>
						<label className="form-label">Name: </label>
						<input
							className="form-control"
							name="name"
							type="text"
							onChange={changeHandler}
							value={formState.name}
						/>
						{validState.name ? (
							<p style={{ color: "red" }}>{validState.name}</p>
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
