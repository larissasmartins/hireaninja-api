const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the database
router.get('/ninjas', function (request, response) {
    response.send({
        type: 'GET',
    });
});

// add a new ninja to the database
router.post('/ninjas', function (request, response) {
    Ninja.create(request.body).then(function (ninja) {
        response.send(ninja); //send back to the client
    });
});

// update a ninja in the database
router.put('/ninjas/:id', function (request, response) {
    response.send({
        type: 'PUT',
    });
});

// delete a ninja from the database
router.delete('/ninjas/:id', function (request, response) {
    response.send({
        type: 'DELETE',
    });
});

module.exports = router;