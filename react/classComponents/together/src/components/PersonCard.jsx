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
            hairColor
		};
	};

    clickHandler = () => {
        let birthday = this.state.age;
        this.setState({
            "age": ++birthday,
        });
        console.log("you clicked me!");
    };

	render() {
		
		return (
			<div>
				<h3>
					{this.state.lastName}, {this.state.firstName}
				</h3>
				<p>Age: {this.state.age} </p>
				<p>Hair Color: {this.state.hairColor}</p>
				<button className="btn btn-primary" onClick={this.clickHandler}>
					Birthday Button for {this.state.firstName} {this.state.lastName}
				</button>
			</div>
		);
	}
}
// EXPORT THE COMPONENT
export default PersonCard;
