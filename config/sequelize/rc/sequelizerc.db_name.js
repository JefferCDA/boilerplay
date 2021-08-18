const path = require('path');

module.exports = {
  config            : path.join('config', 'sequelize', 'databases.js'),
  'models-path'     : path.join('src', 'models'),
  'seeders-path'    : path.join('db', 'seeders', 'db_name'),
  'migrations-path' : path.join('db', 'migrations', 'db_name'),
};
