import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const UpdateForm = () => {
  const [formState, setFormState] = useState({});
  const [validState, setValidState] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/author/${id}`)
      .then((res) => setFormState(res.data))
      .catch((err) => console.log(err));
  }, [id]);



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
        .put(`http://localhost:8000/api/author/${id}`, formState)
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
		<div>
			<fieldset>
				<legend>UpdateForm.jsx</legend>
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

export default UpdateForm;
