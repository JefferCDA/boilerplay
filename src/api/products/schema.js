const Joi = require('@hapi/joi');

module.exports = {

  readProducts: {
    params: Joi.object({
      productId: Joi.number().integer().min(0).max(2147483647),
    }).label('params'),
    query: Joi.object({
      name  : Joi.string().max(32),
      price : Joi.number().integer().min(1),
    }).label('query'),
  },
  createProducts: {
    body: Joi.object({
      name        : Joi.string().max(32).required(),
      description : Joi.string().max(100).required(),
      price       : Joi.number().integer().required(),
      brand       : Joi.string().max(32).required(),
    }).label('body'),
  },
  updateProducts: {
    params: Joi.object({
      productId: Joi.number().integer().min(0).max(500).required(),
    }).label('params'),
    body: Joi.object({
      name        : Joi.string().max(32),
      description : Joi.string().max(100),
      price       : Joi.number().integer(),
      brand       : Joi.string().max(32),
    }).label('body'),
  },
  deleteProducts: {
    params: Joi.object({
      productId: Joi.number().integer().min(0).max(500).required(),
    }).label('params'),
  },
};
