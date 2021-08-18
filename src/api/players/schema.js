const Joi = require('@hapi/joi');

module.exports = {
  getPlayersByTeam: {
    body: Joi.object({
      team : Joi.string().min(2).max(32).required(),
      page : Joi.number().integer().min(1).default(1),
    }).label('body'),
  },

  getPlayers: {
    params: Joi.object({
      playerId: Joi.number().integer().min(0).max(2147483647),
    }).label('params'),
    query: Joi.object({
      name  : Joi.string().max(32),
      order : Joi.string().allow('asc', 'desc').default('asc'),
      page  : Joi.number().integer().min(1).default(1),
    }).label('query'),
  },

};
