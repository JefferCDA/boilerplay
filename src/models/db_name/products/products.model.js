module.exports = {
  modelSchema: (DataTypes) => ({
    productId: {
      type          : DataTypes.BIGINT,
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
    },
    name: {
      type      : DataTypes.STRING(32),
      allowNull : false,
    },
    description: {
      type      : DataTypes.STRING(100),
      allowNull : false,
    },
    price: {
      type      : DataTypes.INTEGER,
      allowNull : false,
    },
    brand: {
      type      : DataTypes.STRING(32),
      allowNull : false,
    },
  }),
  modelConnection(ConnectionInterface, DataTypes) {
    const products = ConnectionInterface.define(
      'products',
      this.modelSchema(DataTypes),
      {
        timestamps      : false,
        freezeTableName : true,
        tableName       : 'products',
      },
    );
    return products;
  },
};
