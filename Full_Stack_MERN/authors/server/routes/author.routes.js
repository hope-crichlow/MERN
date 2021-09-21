const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
	app.get("/api/author/test", AuthorController.test);
};
