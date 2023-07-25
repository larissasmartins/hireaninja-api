const express = require('express');
const router = express.Router();

// get a list of ninjas from the database
router.get('/ninjas', function (request, response) {
    response.send({
        type: 'GET',
    });
});

// add a new ninja to the database
router.post('/ninjas', function (request, response) {
    console.log(request.body);
    response.send({
        type: 'POST',
        name: request.body.name,
        rank: request.body.rank
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