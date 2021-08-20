const playerHook = require('./players.hook');
const playerOps = require('../../models/db_name/players/players.ops');

module.exports = {
  getPlayersByTeam: async (searchParams) => {
    const { page, team } = searchParams;
    const playerParameters = playerHook.teamFilterParser({ team });
    const result = await playerOps.readAll('asc', page, 10, playerParameters);
    return { result };
  },

  getPlayers: async (playerId, searchParams) => {
    const { order, page, name } = searchParams;
    const playerParameters = playerHook.playerFilterParser({ playerId, name });
    const result = await playerOps.readAll(order, page, 10, playerParameters);
    return { result };
  },
};
