import React, { useState } from "react";

const Form = () => {
	const [inputState, setInputState] = useState("");
	return (
		<div className="container px-4">
			<fieldset>
				<legend>Form.jsx</legend>
				<form
					className="form-control d-flex gap-5 justify-content-center "
					action=""
				>
					{/* <label className="form-label"></label> */}
					<input
						className="form-control"
						type="text"
						onChange={(e)=> setInputState(e.target.value)}
						name="task"
						value={inputState}
					/>
					<button className="btn btn-primary" type="submit">
						Add
					</button>
				</form>
			</fieldset>
		</div>
	);
};

export default Form;
