import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";

const Details = () => {
	const { id } = useParams();
	const history = useHistory();
	const [productState, setProductState] = useState(null);

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/product/` + id)
			.then((res) => setProductState(res.data))
			// .then((res) => console.log("your product: ", res.data))
			.catch((err) => console.log(err));
	}, []);

	const deleteHandler = () => {
		axios
			.delete(`http://localhost:8000/api/product/${id}`)
			.then((res) => history.push("/"))
			.catch((err) => console.log(err));
	};

	return (
		<div className="container px-4 ">
			<div className="align-items-right">
				<Link to={"/"} className="btn">
					Dashboard
				</Link>
			</div>

			<div className="row align-items-center justify-content-between gx-5 ">
				{productState ? (
					<div>
						<h1>{productState.title}</h1>
						<h3>Price: $ {productState.price}.00</h3>
						<h3>Description: {productState.description}</h3>
						<button className="btn btn-warning" onClick={deleteHandler}>
							Delete
						</button>
					</div>
				) : (
					<h1>Loading....</h1>
				)}
			</div>
		</div>
	);
};

export default Details;
