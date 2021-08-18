const { Op } = require('sequelize');
const sql = require('../../sql');

module.exports = {

  readAll: async (orderValue, page, entriesPerPage, visitorKeyParameters) => {
    const { rows, count } = await sql.db_name.models.players.findAndCountAll({
      where: {
        ...visitorKeyParameters,
      },
      order: [
        ['name', orderValue],
      ],
      limit  : entriesPerPage,
      offset : (entriesPerPage * page) - entriesPerPage,
    });
    const result = {
      players    : rows,
      page,
      totalPages : Math.ceil(count / entriesPerPage),
      items      : entriesPerPage,
      totalItem  : count,
    };
    return result;
  },

  insert: async (playersData) => {
    const result = await sql.db_name.models.players.create(playersData);
    return result;
  },

  remove: async (playersIds) => {
    const result = await sql.db_name.models.players.destroy({
      where: {
        visitorKeyId: {
          [Op.in]: playersIds,
        },
      },
    });
    return result;
  },

  update: async (playersId, visitorsKeyData) => {
    const result = await sql.db_name.models.players.update({
      ...visitorsKeyData,
    }, {
      where: { visitorKeyId: playersId },
    });
    return result;
  },
};
