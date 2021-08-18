const config = require('../config');

module.exports = {
  db_name: {
    database : 'db_name',
    username : config.SqlDatabase.username,
    password : config.SqlDatabase.password,
    host     : config.SqlDatabase.host,
    port     : config.SqlDatabase.port,
    dialect  : 'mysql',
  },
};
