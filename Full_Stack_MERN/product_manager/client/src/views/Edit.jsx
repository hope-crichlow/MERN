import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";


const Edit = () => {
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/product/` + id)
			.then((res) => setFormState(res.data))
			// .then((res) => console.log("your product: ", res.data))
			.catch((err) => console.log(err));
	}, [id]);

	const [formState, setFormState] = useState({});
	const [validState, setValidState] = useState({});

	const changeHandler = (e) => {
		const { name, value } = e.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

  const submitHandler = (e) => {
			e.preventDefault();
			axios
				.put(`http://localhost:8000/api/product/${id}`, formState)
				.then((res) => {
					history.push(`/${id}`);
				})
				.catch((err) => {
					// console.log("CATCH: ", err.response.data)
					const { errors } = err.response.data;
					let errorObj = {};
					for (let [key, value] of Object.entries(errors)) {
						errorObj[key] = value.message;
					}
					setValidState(errorObj);
				});
		};

	return (
		<div className="container px-4 ">
			<div className="align-items-right">
				<Link to={"/"} className="btn">
					Dashboard
				</Link>
			</div>

				<form onSubmit={submitHandler}>
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
						Update
					</button>
				</form>
		</div>
	);
};

export default Edit;
