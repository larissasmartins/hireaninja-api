const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the database
router.get('/ninjas', function (request, response, next) {
    response.send({ type: 'GET' });
});

// add a new ninja to the database
router.post('/ninjas', function (request, response, next) {
    Ninja.create(request.body).then(function (ninja) {
        response.send(ninja); //send back to the client
    }).catch(next); //middleware for error handling
});

// update a ninja in the database
router.put('/ninjas/:id', function (request, response, next) {
    Ninja.findByIdAndUpdate({ _id: request.params.id }, req.body).then(function () {
        Ninja.findOne({ _id: request.params.id }).then(function (ninja) {
            response.send(ninja);
        });
    });
});

// delete a ninja from the database
router.delete('/ninjas/:id', function (request, response, next) {
    // console.log(request.params.id);
    Ninja.findByIdAndRemove({ _id: request.params.id }).then(function (ninja) {
        request.send(ninja);
    });
    // response.send({ type: 'DELETE' });
});

module.exports = router;