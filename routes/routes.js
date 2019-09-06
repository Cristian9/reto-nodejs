const express = require('express');
const api = express.Router();

const Matematica = require('../controller/controller');


api.get('/multiplicar/:n1/:n2', Matematica.multiplicar);
api.get('/demoentry', (request, response) => {
	response.status(200).send({'demorespuesta' : 'Hola mundo'});
})


module.exports = api;