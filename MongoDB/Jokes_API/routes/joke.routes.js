const JokeController = require("../controllers/joke.controller");

// DEFINE ROUTES
module.exports = app => {
  // TEST ROUTE
  app.get("/api/test", JokeController.test),
		// Listening for a post request to "/api/jokes/new". When request is made execute createJoke method
	app.post("/api/jokes/new", JokeController.createJoke)
}