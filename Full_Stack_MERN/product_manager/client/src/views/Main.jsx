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
	return (
		<div>
			<Form createNewProduct={createNewProduct} />
			<List products={products} />
		</div>
	);
};

export default Main;
