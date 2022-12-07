const express = require('express');
const app = express();
const authorRouter = require('./routes/authorRoutes.js');

require('dotenv').config();

const connectToDB = require('./DB/dbConnection.js');

connectToDB();

const port = process.env.PORT || 6000;

//installed express-mongo-sanitize, then require it
const sanitize = require('express-mongo-sanitize');
// Then apply it to our app (you can also pass arguments to tailor your sanitization further)
app.use(sanitize({allowsDots: true, replaceWith: "_"}))

app.use('/authors', authorRouter);

app.listen(port, ()=> console.log(`Server started on port ${6000}`));