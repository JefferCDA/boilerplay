const playersService = require('../../services/players/players.service');

module.exports = {
  getPlayersByTeam: async (req, res, next) => {
    try {
      return next(await playersService.getPlayersByTeam({ ...req.body }));
    } catch (error) {
      return next({ error });
    }
  },
  getPlayers: async (req, res, next) => {
    try {
      const { playerId } = req.params;
      const searchParams = req.query;
      return next(await playersService.getPlayers(playerId, searchParams));
    } catch (error) {
      return next({ error });
    }
  },

};
