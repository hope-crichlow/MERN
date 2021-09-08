import React, { useState } from "react";

const UserForm = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

	const createUser = (e) => {
		// STOP THE FORM FROM MAKING A REQUEST
		e.preventDefault();
		const newUser = { firstName, lastName, email, password };
		console.log("Welcome", newUser);
		setHasBeenSubmitted(true);
		// CLEAR STATE VALUES
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
	};

	return (
		<div className="container px-4 ">
			<div className="row align-items-center justify-content-between gx-5 ">
				<div className="col flex gap-2">
					<form className="mb-3" onSubmit={createUser}>
						{hasBeenSubmitted ? (
							<h3>Thank you for submitting the form!</h3>
						) : (
							<h3>Welcome, please submit the form.</h3>
						)}
						<div>
							<label className="form-label">First Name: </label>
							<input
								className="form-control"
								type="text"
								onChange={(e) => setFirstName(e.target.value)}
								name="firstName"
								value={firstName}
							/>
						</div>
						<div>
							<label className="form-label">Last Name: </label>
							<input
								className="form-control"
								type="text"
								onChange={(e) => setLastName(e.target.value)}
								name="lastName"
								value={lastName}
							/>
						</div>
						<div>
							<label className="form-label">Email Address: </label>
							<input
								className="form-control"
								type="text"
								onChange={(e) => setEmail(e.target.value)}
								name="email"
								value={email}
							/>
						</div>
						<div>
							<label className="form-label">Password: </label>
							<input
								className="form-control"
								type="password"
								onChange={(e) => setPassword(e.target.value)}
								name="password"
								value={password}
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
								{/* <span>{firstName}</span> */}
								<input
									type="text"
									className="form-control-plaintext"
									id="inputfirstName"
									readOnly
									value={firstName}
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
									value={lastName}
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
									value={email}
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
									value={password}
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
