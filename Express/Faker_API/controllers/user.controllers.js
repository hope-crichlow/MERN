module.exports.allUsers = (req, res) => {
	res.json("Hello Sunshine");
};

module.exports.createUser = (req, res) => {
	console.log(req.body);
	res.json("POST request");
};