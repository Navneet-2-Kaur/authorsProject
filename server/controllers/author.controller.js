const { request, response } = require("express");
const { Author } = require("../models/author.model");

// FOR TESTING
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

// GET ALL AUTHORS FUNCTION-- RELATES TO author.routes
module.exports.getAllAuthors = (request, response) => {
  Author.find()
    .then((Authors) => response.json(Authors))
    .catch(err => response.status(400).json(err))
};

// GET ONE AUTHOR FUNCTION-- RELATES TO author.routes
module.exports.oneAuthor = (req, res) => {
  Author.findOne({_id : req.params.id})
  .then((oneAuthor) => res.json(oneAuthor))
  .catch(err => response.status(400).json(err))

};

// CREATE ONE AUTHOR FUNCTION-- RELATES TO author.routes
module.exports.createAuthor = (request, response) => {
  Author.create(request.body)
    .then((newAuthor) => response.json(newAuthor))
    .catch(err => response.status(400).json(err))

};

// UPDATE ONE AUTHOR FUNCTION-- RELATES TO author.routes
module.exports.updateAuthor = (request, response) => {
  Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
    // need the line runValidators: true in order for the validations i.e "must be more than 3 characters, to work and display"
    new: true, runValidators: true
  })
    .then((updatedAuthor) => response.json(updatedAuthor))
    .catch(err => response.status(400).json(err))

};

// DELETE ONE AUTHOR FUNCTION-- RELATES TO author,routes
module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch(err => response.status(400).json(err))

};
