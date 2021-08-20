const productsService = require('../../services/products/products.service');

module.exports = {
  readProducts: async (req, res, next) => {
    try {
      const { productId } = req.params;
      const searchParams = req.query;
      return next(await productsService.readProducts(productId, searchParams));
    } catch (error) {
      return next({ error });
    }
  },
  createProducts: async (req, res, next) => {
    try {
      const productsData = req.body;
      return next(await productsService.createProducts(productsData));
    } catch (error) {
      return next({ error });
    }
  },
  updateProducts: async (req, res, next) => {
    try {
      const productsData = req.body;
      const { productId } = req.params;
      return next(await productsService.updateProducts(productId, productsData));
    } catch (error) {
      return next({ error });
    }
  },
  deleteProducts: async (req, res, next) => {
    try {
      const { productId } = req.params;
      return next(await productsService.deleteProducts(productId));
    } catch (error) {
      return next({ error });
    }
  },
};
