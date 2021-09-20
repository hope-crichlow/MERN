// import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";

const Main = () => {
	const createNewProduct = (newProduct) => {
		return axios
			.post("http://localhost:8000/api/product/new", newProduct)
			.then((res) => console.log(res))
	};
	return (
		<div>
			<Form createNewProduct={createNewProduct} />
		</div>
	);
};

export default Main;
