const express = require('express');
const cors = require('cors');
const routes = require('../routes');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/product', routes.ProductRoute);
app.use('/user', routes.UserRoute);
app.use('/sale', routes.SaleRoute);

module.exports = app;
