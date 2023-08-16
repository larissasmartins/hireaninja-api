const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjas');
mongoose.Promise = global.Promise;

// middleware
app.use(bodyParser.json());

// (middleware) initialize routes
app.use('/api', require('./routes/api'));

// (middleware) error handling 
app.use(function (error, resquest, response, next) {
    // console.log(error);
    response.status(422).send({ error: error.message });
});

// listen for requests
app.listen(process.env.port || 3000, function () {
    console.log('now listening for requests');
});
