const md5 = require('md5');
const { User } = require('../database/models');
const Token = require('../middlewares/token');

const getAll = async () => User.findAll();

const getByEmailAndPassword = async (email, password) => {
  const senha = md5(password);
  const result = await User.findOne({ where: { email, password: senha } });
  if (!result || result === null) return { status: 404, message: 'Email ou Senha inválidos' };
  const token = Token.createToken(email);
  const finalResult = {
    name: result.dataValues.name,
    email: result.dataValues.email,
    token,
  };
  return { status: 200, message: finalResult };
};

const getByEmail = async (email) => {
  const result = await User.findOne({ where: { email } });
  return result.dataValues.id;
};

const getByPk = async (id) => {
    const result = await User.findOne({ where: { id } });
    return result;
};

const add = async ({ name, email, password }) => {
  const senha = md5(password);
  const [result, create] = await User.findOrCreate({ where: { email },
    defaults: { name, email, password: senha },
  });
  const token = Token.createToken(email);
  const finalResult = {
    name: result.dataValues.name,
    email: result.dataValues.email,
    token,
  };
  if (create === true) return { status: 201, message: finalResult };
  return { status: 409, message: 'Conflict' };
};

const update = async ({ id, name, email, password }) => {
  User.update({ name, email, password }, { where: { id } });

  return User.findByPk(id);
};

const destroy = async (id) => User.destroy({ where: { id } });

module.exports = { getByPk, getAll, getByEmailAndPassword, getByEmail, add, update, destroy };
