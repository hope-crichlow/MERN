const express = require("express"); // IMPORT EXPRESS
const faker = require("faker"); // IMPORT FAKER
const app = express(); // CREATE INSTANCE OF EXPRESS SERVER
const port = 8000; //  DEFINE PORT

// CONFIGURATION FOR EXPRESS SERVER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CREATE USER CLASS
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
// console.log(new User());

// CREATE COMPANY CLASS
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
// console.log(new Company());

// DEFINE ROUTES FOR EXPRESS SERVER
app.get("/api", (req, res) => {
	res.send("Our express api SERVER is now sending this over to the browser");
});

// CREATE API ROUTE "/api/users/new", RETURN NEW USER 
app.get("/api/users/new", (req, res) => {
	let newUser = new User();
	res.json(newUser);
});

// CREATE API ROUTE "/api/companies/new", RETURN NEW COMPANY
app.get("/api/companies/new", (req, res) => {
	let newCompany = new Company();
	res.json(newCompany);
});

// RUN EXPRESS SERVER
app.listen(port, () => console.log("EPRESS SERVER RUNNING ON PORT: " + port));
