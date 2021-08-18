const { authorizationError } = require('../error/others/authorization.error');
const { apiKey } = require('../../../config/config');

module.exports = {
  validApiKey: async (req, res, next) => {
    try {
      const xApiKey = req.headers['x-api-key'];
      const isValid = (apiKey == xApiKey);

      if (!isValid) {
        throw authorizationError();
      }

      return next();
    } catch (error) { return next({ error }); }
  },

};
