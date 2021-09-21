import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const Main = () => {
	return (
		<div>
			<fieldset>
				<legend>Main.jsx</legend>

				<nav>
					<Link className="btn" to={"/new"}>
						Add an author
					</Link>
					<Link className="btn" to={"/"}>
						Home
					</Link>
				</nav>
			</fieldset>
		</div>
	);
};

export default Main;
