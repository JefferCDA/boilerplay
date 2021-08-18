/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
const { modelSchema } = require('../../../src/models/db_name/players/players.model');

module.exports = {
  up: (queryInterface, DataTypes) => {    const players = queryInterface.createTable('players', modelSchema(DataTypes), {      timestamps      : false,      freezeTableName : true,      tableName       : 'players',    });    return players;  },

  down: (queryInterface) => {    return queryInterface.dropTable('players');  },
};
