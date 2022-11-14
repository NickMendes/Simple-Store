const express = require('express');
const SaleProductController = require('../controller/saleProductController');

const saleProductRoute = express.Router();

saleProductRoute.route('/')
  .get(SaleProductController.getAll)
  .post(SaleProductController.add);

saleProductRoute.route('/:id')
  .get(SaleProductController.getBySaleId)
  .put(SaleProductController.update)
  .delete(SaleProductController.destroy);

saleProductRoute.route('/saleId')
  .post(SaleProductController.getById);

module.exports = saleProductRoute;
