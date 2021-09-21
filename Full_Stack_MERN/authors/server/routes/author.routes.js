const AuthorController = require("../controllers/author.controller");
// DEFINE ROUTES
// Use the methods written in controller file "module.exports._method_name_"
module.exports = app => {
// TEST ROUTE
  app.get("/api/author/test", AuthorController.test),
// CREATE
  app.post("/api/author/new", AuthorController.createAuthor),
// READ
  app.get("/api/authors", AuthorController.getAllAuthors),
  app.get("/api/author/:author_id", AuthorController.getOneAuthor),
// UPDATE
  app.put("/api/author/:author_id", AuthorController.updateAuthorByID),
// DELETE
  app.delete("/api/author/:author_id", AuthorController.deleteAuthor)
};