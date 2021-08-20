/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
const { modelSchema } = require('../../../src/models/db_name/products/products.model');

module.exports = {
  up: (queryInterface, DataTypes) => {    const products = queryInterface.createTable('products', modelSchema(DataTypes), {      timestamps      : false,      freezeTableName : true,      tableName       : 'products',    });    return products;  },

  down: (queryInterface) => {    return queryInterface.dropTable('products');  },
};
