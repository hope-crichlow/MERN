const express = require("express"); // IMPORT EXPRESS
const faker = require("faker"); // IMPORT FAKER
const app = express(); // CREATE INSTANCE OF EXPRESS SERVER
const port = 8000; //  DEFINE PORT

// CONFIGURATION FOR EXPRESS SERVER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
	constructor() {
		this._id = faker.datatype.uuid();
		this.firstName = faker.name.firstName();
		this.lastName = faker.name.lastName();
		this.phoneNumber = faker.phone.phoneNumber();
		this.email = faker.internet.email();
		this.password = faker.internet.password();
	}
}
console.log(new User());

class Company {
	constructor() {
		this._id = faker.datatype.uuid();
		this.name = faker.company.companyName();
		this.street = faker.address.streetAddress();
		this.city = faker.address.city();
		this.state = faker.address.country();
		this.zipCode = faker.address.country();
		this.country = faker.address.country();
	}
}
console.log(new Company());

// DEFINE ROUTES FOR EXPRESS SERVER
const UserRoutes = require("./routes/user.routes");
UserRoutes(app);

// RUN EXPRESS SERVER
app.listen(port, () => console.log("EPRESS SERVER RUNNING ON PORT: " + port));
