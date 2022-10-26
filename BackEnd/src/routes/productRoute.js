const express = require('express');
const Product = require('../controller/productController');

const router = express.Router();

router.route('/')
  .get(Product.getAll)
  .post(Product.add);

router.route('/:id')
  .put(Product.update)
  .get(Product.getById)
  .delete(Product.destroy);

module.exports = router;
