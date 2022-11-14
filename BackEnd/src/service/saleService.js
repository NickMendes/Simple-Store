const { Sales } = require('../database/models');

const getAll = async () => Sales.findAll();

const getById = async (id) => Sales.findByPk(id);

const getByUserId = async (userId) => Sales.findAll({ where: { userId } });

const add = async ({ userId, totalPrice, saleDate, status }) => {
  return Sales.create({ userId, totalPrice, saleDate, status });
};

const update = async (id, product) => {
  await Sales.update(product, { where: { id } });

  return Sales.findByPk(id);
};

const destroy = async (id) => Sales.destroy({ where: { id } });

module.exports = { getAll, getById, getByUserId, add, update, destroy };
