const express = require('express');
const UserController = require('../controllers/userController');

const userRoute = express.Router();

userRoute.route('/')
  .get(UserController.getAll)
  .post(UserController.add);

userRoute.route('/:id')
  .get(UserController.getByPk)
  .put(UserController.update)
  .delete(UserController.destroy);

userRoute.route('/email')
  .post(UserController.getByEmailAndPassword);
  
userRoute.route('/email/:email')
  .get(UserController.getByEmail);

module.exports = userRoute;
