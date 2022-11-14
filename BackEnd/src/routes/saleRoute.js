const express = require('express');
const SaleController = require('../controller/saleController');

const saleRoute = express.Router();

saleRoute.route('/')
  .get(SaleController.getAll)
  .post(SaleController.add);

saleRoute.route('/:id')
  .get(SaleController.getById)
  .put(SaleController.update)
  .delete(SaleController.destroy);

saleRoute.route('/usersale/:userId')
  .get(SaleController.getByUserId);

module.exports = saleRoute;
