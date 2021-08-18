/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
const asyncFunctions = require('async');
const playersProvider = require('../../../src/providers/players/players.providers');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    let playersFound = [];
    const players = await playersProvider.getPlayersApiFifa();
    const playersFifaData = await new Promise((resolve) => {
      asyncFunctions.parallelLimit(players, 1, (error, result) => {
        result.forEach((playersItem) => {
          playersFound = playersFound.concat(playersItem);
        });
        resolve(playersFound);
      });
    });

    return queryInterface.bulkInsert('players', playersFound);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('players', null, {});
  },
};
