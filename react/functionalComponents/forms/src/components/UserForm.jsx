import React, { useState } from "react";

const UserForm = (props) => {

	const [formState, setFormState] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		hasBeenSubmitted: false
	});

	const changeHandler = (e) => {
		const { name, value } = e.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const [validState, setValidState] = useState({
		firstName: [],
		lastName: false,
		email: false,
		password: false,
		confirmPassword: false,
	});

	const createUser = (e) => {
		let firstName = [];
		let lastName = false;
		let email = false;
		let password = false;
		let confirmPassword = false;

		// STOP THE FORM FROM MAKING A REQUEST
		e.preventDefault();

		//////////////// VALIDATIONS \\\\\\\\\\\\\\\\\\\
		// FIRST NAME MUST BE AT LEAST 2 CHARACTERS
		if (formState.firstName.length < 2) {
			firstName.push("Name must be more than 2 characters");
		}
		// LAST NAME MUST BE AT LEAST 2 CHARACTERS
		if (formState.lastName.length < 2) {
			lastName = true;
		}
		// EMAIL MUST BE VALID FORMAT
		if (
			!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formState.email)
		) {
			email = true;
		}

		// PASSWORD LENGTH MUST BE MORE THAN 5 CHARACTERS
		if (formState.password.length < 5) {
			password = true;
		}
		// PASSWORD CONFIRMATION MUST MATCH PASSWORD
		if (formState.password !== formState.confirmPassword) {
			confirmPassword = true;
		}
		setValidState({
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
		});
		//////////////// VALIDATIONS \\\\\\\\\\\\\\\\\\\

		// CREATE NEW USER
		const newUser = {
			firstName: formState.firstName,
			lastName: formState.lastName,
			email: formState.email,
			password: formState.password,
		};

		console.log("Welcome", newUser);

		// CLEAR STATE VALUES
		setFormState({
			...formState,
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			// AFTER FORM IS SUBMITTED, CHANGE WELCOME MESSAGE TO THANK YOU
			hasBeenSubmitted: true,
		});

	};

	return (
		<div className="container px-4 ">
			<div className="row align-items-center justify-content-between gx-5 ">
				<div className="col flex gap-2">
					<form className="mb-3" onSubmit={createUser}>
						{formState.hasBeenSubmitted ? (
							<h3>Thank you for submitting the form!</h3>
						) : (
							<h3>Welcome, please submit the form.</h3>
						)}
						<div>
							<label className="form-label">First Name: </label>
							{validState.firstName.map((message) => (
								<p style={{ color: "red" }}>{message}</p>
							))}
							<input
								className="form-control"
								type="text"
								onChange={changeHandler}
								name="firstName"
								value={formState.firstName}
							/>
						</div>
						<div>
							<label className="form-label">Last Name: </label>
							{validState.lastName ? (
								<p style={{ color: "red" }}>
									Last name must be atleast 2 characters
								</p>
							) : null}
							<input
								className="form-control"
								type="text"
								onChange={changeHandler}
								name="lastName"
								value={formState.lastName}
							/>
						</div>
						<div>
							<label className="form-label">Email Address: </label>
							{validState.email ? (
								<p style={{ color: "red" }}>Email must be valid</p>
							) : null}
							<input
								className="form-control"
								type="text"
								onChange={changeHandler}
								name="email"
								value={formState.email}
							/>
						</div>
						<div>
							<label className="form-label">Password: </label>
							{validState.password ? (
								<p style={{ color: "red" }}>Password must be atleast 5 characters</p>
							) : null}
							<input
								className="form-control"
								type="password"
								onChange={changeHandler}
								name="password"
								value={formState.password}
							/>
						</div>
						<div>
							<label className="form-label">Confirm Password: </label>
							{validState.confirmPassword ? (
								<p style={{ color: "red" }}>
									Password and Confirm Password must match
								</p>
							) : null}
							<input
								className="form-control"
								type="password"
								onChange={changeHandler}
								name="confirmPassword"
								value={formState.confirmPassword}
							/>
						</div>
						<input className="btn" type="submit" value="Create User" />
					</form>
				</div>

				<div className="col d-flex-column gap-2">
					<h3>Your Form Data</h3>
					<form className="mb-3" action="">
						<div className="row mb-3 ">
							<label className="col-sm-3 col-form-label">First Name:</label>
							<div className="col-sm-6">
						
								<input
									type="text"
									className="form-control-plaintext"
									id="inputfirstName"
									readOnly
									value={formState.firstName}
								/>
							</div>
						</div>
						<div className="row mb-3">
							<label className="col-sm-3 col-form-label">Last Name:</label>
							<div className="col-sm-6">
								<input
									type="text"
									className="form-control-plaintext"
									id="inputLastName"
									readOnly
									value={formState.lastName}
								/>
							</div>
						</div>
						<div className="row mb-3">
							<label className="col-sm-3 col-form-label">Email:</label>
							<div className="col-sm-6">
								<input
									type="email"
									className="form-control-plaintext"
									id="inputEmail3"
									readOnly
									value={formState.email}
								/>
							</div>
						</div>
						<div className="row mb-3">
							<label className="col-sm-3 col-form-label">Password:</label>
							<div className="col-sm-6">
								<input
									type="text"
									className="form-control-plaintext"
									id="inputPassword3"
									readOnly
									value={formState.password}
								/>
							</div>
						</div>
						<div className="row mb-3">
							<label className="col-sm-3 col-form-label">
								Confirm Password:
							</label>
							<div className="col-sm-6">
								<input
									type="text"
									className="form-control-plaintext"
									id="inputConfirmPassword3"
									readOnly
									value={formState.confirmPassword}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UserForm;
