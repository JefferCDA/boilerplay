const playerHook = require('./players.hook');

module.exports = {
  getPlayersApiFifa: async () => {
    const options = playerHook.getUrl('');
    const apiResponse = await playerHook.getApiData(options);

    const responsePlayers = [];

    for (let i = 0; i < apiResponse.totalPages; i++) {
      const requestOptions = playerHook.getUrl(i + 1);
      const request = async () => {
        const response = await playerHook.getApiData(requestOptions);
        const data = await response.items.map((item) => {
          const playerData = {
            name        : item.name,
            position    : item.positionFull,
            nationality : item.nation.name,
            team        : item.club.name,
            age         : item.age,
            foot        : item.foot,
            height      : item.height,
            weight      : item.weight,
          };
          return playerData;
        });
        return data;
      };
      responsePlayers.push(request);
    }

    return responsePlayers;
  },

};
