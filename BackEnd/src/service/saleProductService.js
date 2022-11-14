const { SalesProduct } = require('../database/models');

const getAll = async () => SalesProduct.findAll();

const getById = async (saleId, productId) => SalesProduct.findOne({ where: { saleId, productId } });

const getBySaleId = async (id) => SalesProduct.findAll({ where: { saleId: id } });

const add = async ({ saleId, productId, quantity }) =>
SalesProduct.create({ saleId, productId, quantity });

const update = async ({ id, saleId, productId, quantity }) => {
  await SalesProduct.update({ saleId, productId, quantity }, { where: { id } });

  return SalesProduct.findByPk(id);
};

const destroy = async (id) => SalesProduct.destroy({ where: { id } });

module.exports = { getAll, getById, getBySaleId, add, update, destroy };
