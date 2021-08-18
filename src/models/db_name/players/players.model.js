module.exports = {
  modelSchema: (DataTypes) => ({
    playerId: {
      type          : DataTypes.BIGINT,
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
    },
    name: {
      type      : DataTypes.STRING(32),
      allowNull : false,
    },
    position: {
      type      : DataTypes.STRING(32),
      allowNull : false,
    },
    nationality: {
      type      : DataTypes.STRING(32),
      allowNull : false,
    },
    team: {
      type      : DataTypes.STRING(32),
      allowNull : false,
    },
    age: {
      type      : DataTypes.STRING(4),
      allowNull : true,
    },
    foot: {
      type      : DataTypes.STRING(8),
      allowNull : true,
    },
    height: {
      type      : DataTypes.STRING(4),
      allowNull : true,
    },
    weight: {
      type      : DataTypes.STRING(4),
      allowNull : true,
    },
  }),

  modelConnection(ConnectionInterface, DataTypes) {
    const players = ConnectionInterface.define('players', this.modelSchema(DataTypes), {
      timestamps      : false,
      freezeTableName : true,
      tableName       : 'players',
    });

    return players;
  },

};
