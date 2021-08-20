const { Op } = require('sequelize');
const sql = require('../../sql');

module.exports = {

  readAll: async (productsParameters) => {
    const result = await sql.db_name.models.products.findAll({
      where: {
        ...productsParameters,
      },
    });
    return result;
  },

  insert: async (productsData) => {
    const result = await sql.db_name.models.products.create(productsData);
    return result;
  },

  remove: async (productId) => {
    const result = await sql.db_name.models.products.destroy({
      where: { productId },
    });
    return result;
  },

  update: async (productId, productsData) => {
    const result = await sql.db_name.models.products.update({
      ...productsData,
    }, {
      where: { productId },
    });
    return result;
  },

};
