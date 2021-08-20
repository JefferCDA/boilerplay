const { filterFieldsParser } = require('../../models/sql');
const { clearUndefineParams } = require('../../libraries/tools/datatype');

module.exports = {
  productFilterParser: (staffSearchParams) => {
    const { productId, name, ...searchParams } = { ...staffSearchParams };

    if (name) {
      searchParams.name = name;
    }

    const productsFilterParams = filterFieldsParser(searchParams);
    const exemptFilterParams = clearUndefineParams({ productId });

    return { ...productsFilterParams, ...exemptFilterParams };
  },

};
