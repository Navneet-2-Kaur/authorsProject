const AuthorController = require("../controllers/author.controller");

// FOR TESTING
module.exports = function (app) {
  app.get("/api", AuthorController.index);
};


module.exports = function (app) {
  // GET ALL AUTHORS --> GE
  app.get("/api/authors", AuthorController.getAllAuthors);

  // GET ONE AUTHOR --> GET
  app.get("/api/authors/:id", AuthorController.oneAuthor);

  // CREATE ONE AUTHOR --> POST
  app.post("/api/authors/new", AuthorController.createAuthor);

  // UPDATE ONE AUTHOR --> PUT  -- Winter suggests using PUT instead of patch
  app.put("/api/authors/:id/edit", AuthorController.updateAuthor);

  // DELETE ONE AUTHOR --> DELETE
  app.delete("/api/authors/:id", AuthorController.deleteAuthor);
}; // do not add route past this bracket 

// import routes to our server!
