const { Products } = require('../database/models');

const getAll = async () => {
  const result = await Products.findAll();
  if(!result) {
    throw new Error('Erro, nada foi encontrado')
  }
  return result;
};

const getById = async (id) => {
  const result = await Products.findOne({ where: { id } });
  if(!result) {
    throw new Error('Erro, nada foi encontrado')
  }
  return result;
};

const add = async ({ name, price, description, url }) => {
  const result = await Products.create({ name, price, description, url });
  return result;
}

const update = async ({ id, name, price, description, url }) => {
  await Products.update({ name, price, description, url }, { where: { id } });

  const result = await Products.findOne({ where: { id } });
  return result;
};

const destroy = async (id) => {
  await Products.findOne({ where: { id } });

  const result = await Products.destroy({ where: { id } });
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