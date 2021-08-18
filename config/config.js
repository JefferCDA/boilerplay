const environmentVariables = {
  production: {
    webServicePort : 8080,
    SqlDatabase    : {
      host     : 'localhost',
      port     : 3306,
      username : 'root',
      password : 'meinsm',
    },
    apiKey: 's3cr3tp@ssw0rd',
  },
  development: {
    webServicePort : 8080,
    SqlDatabase    : {
      host     : 'localhost',
      port     : 3306,
      username : 'root',
      password : 'meinsm',
    },
    apiKey: 's3cr3tp@ssw0rd',
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports = environmentVariables.production;
} else {
  module.exports = environmentVariables.development;
}
