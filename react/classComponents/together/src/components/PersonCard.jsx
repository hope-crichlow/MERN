// IMPORT REACT FROM OUR DEPENDENCIES
import React, { Component } from "react";

// CREATE THE COMPONENT
class PersonCard extends Component {
	constructor(props) {
		super(props);
        const { firstName, lastName, age, hairColor } = this.props;
		this.state = {
            firstName,
            lastName,
            age,
            hairColor,
			clicked: 0,
		};
	}
	render() {
		
		return (
			<div>
				<h3>
					{this.state.lastName}, {this.state.firstName}
				</h3>
				<p>Age: {this.state.age} </p>
				<p>Hair Color: {this.state.hairColor}</p>
				<button class="btn btn-primary">
					Birthday Button for {this.state.firstName} {this.state.lastName}
				</button>
			</div>
		);
	}
}
// EXPORT THE COMPONENT
export default PersonCard;
