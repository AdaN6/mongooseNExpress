const express = require('express');
const authorRouter = express.Router();

const {
  getAuthors,
  getAuthorById,
  postAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorControllers.js");

authorRouter
.route('/')
.get(getAuthors)
.post(postAuthor);

authorRouter
.route('/:id')
.get(getAuthorById)
.put(updateAuthor)
.delete(deleteAuthor);

module.exports = authorRouter;