const app = require('express').Router();
const controller = require('./controller');
const schemas = require('./schema');
const endpointValidator = require('../../libraries/middlewares/endpoint-validator');
const { validApiKey } = require('../../libraries/middlewares/authorization');

app.post('/team', endpointValidator(schemas.getPlayersByTeam), controller.getPlayersByTeam);
app.get('/players', validApiKey, endpointValidator(schemas.getPlayers), controller.getPlayers);

module.exports = app;
