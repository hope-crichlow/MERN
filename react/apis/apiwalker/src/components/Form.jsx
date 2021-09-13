import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
	const [category, setCategory] = useState();
	const [id, setId] = useState();

	const history = useHistory();

	const submitHandler = (e) => {
		e.preventDefault();
		// console.log(`/${category}/${id}`)
		// SEND THE USER TO /CATEGORY/ID
		history.push(`/${category}/${id}`);
	};

	
	return (
		<div>
			<form onSubmit={submitHandler}>
				<p>
					Search for:
					<select
						name="category"
						id=""
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value="">Select category</option>
						<option value="people">People</option>
						<option value="planets">Planets</option>
					</select>
                    ID:
					<input
						type="number"
						name="id"
						id=""
						onChange={(e) => setId(e.target.value)}
					/>
					<button>Get info</button>
				</p>
			</form>
		</div>
	);
};

export default Form;
