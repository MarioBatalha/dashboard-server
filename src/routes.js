const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json('It is running');
});

module.exports = routes;