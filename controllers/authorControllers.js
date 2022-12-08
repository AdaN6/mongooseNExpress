const AuthorCollection = require('../models/authorModel');

const getAuthors = async (req, res) => {
    try{
      // Then we can query our database! This function is meant to return all authors in the database
      const authors = await AuthorCollection.find();
      // And we return to our client the query in JSON format.
      res.status(200).json(authors);
    } catch (error) {
      // If there is an error, we will send a 500 status code and the error's message to the client
      res.status(500).send(error.message);
    }
};

const getAuthorById = async (req, res) => {
    try{
        const {id} = req.params;
        const authorById = await AuthorCollection.findById(id);
        if (authorById) return res.status(200).json(authorById);
        res.status(404).send('Author not found');

    } catch (error){
    res.status(500).send(error.message);
    }
};

const postAuthor = (req, res) => {
    try{

    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateAuthor = (req, res) => {};

const deleteAuthor = (req, res) => {};

module.exports = {
  getAuthors,
  getAuthorById,
  postAuthor,
  updateAuthor,
  deleteAuthor,
};
