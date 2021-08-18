const axios = require('../../libraries/tools/axios');
const RequestOptions = require('./players.options');

module.exports = {
  getUrl: (page) => {
    const options = {
      method : 'GET',
      url    : `https://easports.com/`,
      path   : `fifa/ultimate-team/api/fut/item?page=${page}`,
    };

    return options;
  },

  getApiData: async (options) => {
    const requestOptions = new RequestOptions(options);
    const { data } = await axios.instance(requestOptions);

    return data;
  },

};
