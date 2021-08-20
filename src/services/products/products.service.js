const productHook = require('./products.hook');
const productOps = require('../../models/db_name/products/products.ops');

module.exports = {

  readProducts: async (productId, searchParams) => {
    const productParameters = productHook.productFilterParser({ productId, ...searchParams });
    const result = await productOps.readAll(productParameters);
    return { result };
  },
  createProducts: async (productsData) => {
    const result = await productOps.insert(productsData);
    return { result };
  },
  updateProducts: async (productId, productsData) => {
    const result = await productOps.update(productId, productsData);
    return { result };
  },
  deleteProducts: async (productId) => {
    const result = await productOps.remove(productId);
    return { result };
  },

};
