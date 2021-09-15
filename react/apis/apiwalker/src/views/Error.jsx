import React from "react";
import Obiwan from "../images/obiwan.png";

const Error = () => {
	return (
		<div>
			<fieldset>
				{/* <legend>Error.jsx</legend> */}
				<h1>"These aren't the droids you're looking for" </h1>

				<img src={Obiwan} style={{ maxWidth: "500px" }}></img>
			</fieldset>
		</div>
	);
};

export default Error;
