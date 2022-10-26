const { Product } = require('../../models');

const getAll = async () => {
  const result = await Product.findAll();
  if(!result) {
    throw new Error('Erro, nada foi encontrado')
  }
  return result;
};

const getById = async (id) => {
  const result = await Product.findOne({ where: { id } });
  if(!result) {
    throw new Error('Erro, nada foi encontrado')
  }
  return result;
};

const add = async ({ name, price, description, url }) => {
  const result = await Product.create({ name, price, description, url });
  return result;
}

const update = async ({ id, name, price, description, url }) => {
  await Product.update({ name, price, description, url }, { where: { id } });

  const result = await Product.findOne({ where: { id } });
  return result;
};

const destroy = async (id) => {
  await Product.findOne({ where: { id } });

  const result = await Product.destroy({ where: { id } });
  if(!result) throw new Error('Erro, nada foi encontrado');

  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  destroy,
};