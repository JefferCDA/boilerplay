const app = require('express').Router();
const controller = require('./controller');
const schemas = require('./schema');
const endpointValidator = require('../../libraries/middlewares/endpoint-validator');
// const { validApiKey } = require('../../libraries/middlewares/authorization');

app.get('/', endpointValidator(schemas.readProducts), controller.readProducts);
app.post('/', endpointValidator(schemas.createProducts), controller.createProducts);
app.put('/:productId?', endpointValidator(schemas.updateProducts), controller.updateProducts);
app.delete('/:productId?', endpointValidator(schemas.deleteProducts), controller.deleteProducts);

module.exports = app;
