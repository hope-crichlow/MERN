// IMPORT REACT FROM OUR DEPENDENCIES
import React, { Component } from "react";

// CREATE OUR COMPONENT
class Display extends Component {
	render() {
		return (
			<>
				<h1>Hello Dojo!</h1>
				<h3>Things I need to do:</h3>
				<ul>
					<li>Learn React</li>
					<li>Climb Mt.Everest</li>
					<li>Run a marathon</li>
					<li>Feed the dogs</li>
				</ul>
			</>
		);
	}
}
// EXPORT OUR COMPONENT
export default Display;
