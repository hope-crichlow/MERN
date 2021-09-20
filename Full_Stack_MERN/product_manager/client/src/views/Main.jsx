import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import List from "../components/List";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
			axios
				.get("http://localhost:8000/api/product")
				.then((res) => setProducts(res.data))
				.catch((err) => console.log(err));
		}, []);

	const createNewProduct = (newProduct) => {
		return axios
			.post("http://localhost:8000/api/product/new", newProduct)
			.then((res) => console.log(res))
	};

  const deleteHandler = (id) => {
		axios
			.delete(`http://localhost:8000/api/product/${id}`)
			.then((res) => setProducts((prev) => prev.filter((p) => p._id !== id)))
			.catch((err) => console.log(err));
	};

	return (
		<div className="container px-4 ">
			<div className="row align-items-center justify-content-between gx-5 ">
				<Form createNewProduct={createNewProduct} />
				<List products={products} deleteHandler={deleteHandler} />
			</div>
		</div>
	);
};

export default Main;
