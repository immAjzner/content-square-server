const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/users', require('./controllers/users'));


module.exports = app;