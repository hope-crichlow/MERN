import React from 'react'
import UpdateForm from '../components/UpdateForm';

const Edit = () => {
  return (
		<div>
			<fieldset>
				<legend>Edit.jsx</legend>
				<div>
					<h3 className="greeting">Edit This Author:</h3>
				</div>
				<UpdateForm />
			</fieldset>
		</div>
	);
}

export default Edit;
