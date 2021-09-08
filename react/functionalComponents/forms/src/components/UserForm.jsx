import React, { useState } from "react";

const UserForm = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const createUser = (e) => {
		// STOP THE FORM FROM MAKING A REQUEST
		e.preventDefault();
		const newUser = { firstName, lastName, email, password };
		console.log("Welcome", newUser);
	};

	return (
		<div className="container-sm">
			<h3>New User Form</h3>
			<form className="mb3" onSubmit={createUser}>
				<div>
					<label className="form-label">First Name: </label>
					<input
						className="form-control"
						type="text"
						onChange={(e) => setFirstName(e.target.value)}
						value={firstName}
					/>
				</div>
				<div>
					<label className="form-label">Last Name: </label>
					<input
						className="form-control"
						type="text"
						onChange={(e) => setLastName(e.target.value)}
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

			<h3>Your Form Data</h3>
			<form action="">
				<div class="row mb-3">
					<label for="inputFirstName" class="col-sm-2 col-form-label">
						First Name
					</label>
					<div class="col-sm-10">
						<input
							type="text"
							class="form-control"
							id="inputfirstName"
							value={firstName}
						/>
					</div>
				</div>
				<div class="row mb-3">
					<label for="inputEmail3" class="col-sm-2 col-form-label">
						Email
					</label>
					<div class="col-sm-10">
						<input type="email" class="form-control" id="inputEmail3" />
					</div>
				</div>
				<div class="row mb-3">
					<label for="inputPassword3" class="col-sm-2 col-form-label">
						Password
					</label>
					<div class="col-sm-10">
						<input type="password" class="form-control" id="inputPassword3" />
					</div>
				</div>
			</form>
		</div>
	);
};

export default UserForm;
