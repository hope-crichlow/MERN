import React, { useState } from "react";

const UserForm = (props) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const createUser = (e) => {
		e.preventDefault();
		const newUser = { username, email, password };
		console.log("Welcome", newUser);
	};

	return (
		<form className="mb3" onSubmit={createUser}>
			<div>
				<label className="form-label">Username: </label>
				<input
					className="form-control"
					type="text"
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div>
				<label className="form-label">Email Address: </label>
				<input
					className="form-control"
					type="text"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label className="form-label">Password: </label>
				<input
					className="form-control"
					type="text"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<input className="btn" type="submit" value="Create User" />
		</form>
	);
};

export default UserForm;

