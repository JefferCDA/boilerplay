const fs = require('fs');
const Sequelize = require('sequelize');
const databases = require('../../config/sequelize/databases');

const databasesConfig = Object.keys(databases);
const db = {};

databasesConfig.map((dbName) => {
  const dbConnection = databases[dbName];
  const { database, username, password } = dbConnection;

  db[database] = new Sequelize(database, username, password, dbConnection);
  return db;
});

fs
  .readdirSync(__dirname)
  .filter((file) => fs.lstatSync(`${__dirname}/${file}`).isDirectory())
  .forEach((dbName) => {
    fs
      .readdirSync(`${__dirname}/${dbName}`)
      .filter((file) => {
        const isDirectory = fs.lstatSync(`${__dirname}/${dbName}/${file}`).isDirectory();
        const hasModel = fs.existsSync(`${__dirname}/${dbName}/${file}/${file}.model.js`);
        return isDirectory && hasModel;
      })
      .forEach((file) => {
        require(`${__dirname}/${dbName}/${file}/${file}.model.js`).modelConnection(db[dbName], Sequelize);
      });

    return {};
  });

Object.keys(db).forEach((modelName) => {
  const database = db[modelName];

  if (!database.models) {
    return null;
  }

  Object.keys(database.models).forEach((model) => {
    if (database.models[model].associate) {
      database.models[model].associate(database.models);
    }
  });

  return null;
});


module.exports = {
  ...db,

  sequelizeParser: (result) => JSON.parse(JSON.stringify(result)),

  filterFieldsParser: (fieldsToFilter) => {
    const fieldsParsed = {};
    Object.keys(fieldsToFilter).forEach((field) => {
      const fieldValue = fieldsToFilter[field];
      const dataType = typeof fieldValue;
      const isString = dataType === 'string';
      const isUndefined = dataType === 'undefined';

      if (isUndefined) {
        return null;
      }

      let isNull;

      if (isString) {
        isNull = fieldValue.toLowerCase() === 'null';
      }

      if (isString && isNull) {
        fieldsParsed[field] = { [Sequelize.Op.is]: null };
        return null;
      }

      if (isString && !isNull) {
        fieldsParsed[field] = { [Sequelize.Op.like]: `%${fieldValue}%` };
        return null;
      }

      fieldsParsed[field] = fieldValue;
      return null;
    });

    return fieldsParsed;
  },
};
