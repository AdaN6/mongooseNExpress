const express = require('express');
const app = express();
const authorRouter = require('./routes/authorRoutes.js');

require('dotenv').config();

const connectToDB = require('./DB/dbConnection.js');

connectToDB();

const port = process.env.PORT || 6000;

app.use('/authors', authorRouter);

app.listen(port, ()=> console.log(`Server started on port ${6000}`));