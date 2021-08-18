const { filterFieldsParser } = require('../../models/sql');
const { clearUndefineParams } = require('../../libraries/tools/datatype');

module.exports = {

  playerFilterParser: (staffSearchParams) => {
    const {
      playerId,
      name,
      ...searchParams
    } = { ...staffSearchParams };

    if (name) { searchParams.name = name; }

    const playersFilterParams = filterFieldsParser(searchParams);
    const exemptFilterParams = clearUndefineParams({ playerId });

    return { ...playersFilterParams, ...exemptFilterParams };
  },

  teamFilterParser: (staffSearchParams) => {
    const {
      team,
      ...searchParams
    } = { ...staffSearchParams };

    if (team) { searchParams.team = team; }

    const playersFilterParams = filterFieldsParser(searchParams);

    return { ...playersFilterParams };
  },
};
