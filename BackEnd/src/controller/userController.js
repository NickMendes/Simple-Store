const UserService = require('../services/userService');

const getAll = async (_req, res) => {
  try {
    const result = await UserService.getAll();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getByPk = async (req, res) => {
const { id } = req.params;
    try {
        const result = await UserService.getByPk(id);
        return res.status(200).json(result);
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
      }
};

const getByEmailAndPassword = async (req, res) => {
  const { data: { email, password } } = req.body;
  try {
    const result = await UserService.getByEmailAndPassword(email, password);
    return res.status(result.status).json(result.message);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getByEmail = async (req, res) => {
  try {
    const result = await UserService.getByEmail(req.params.email);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const add = async (req, res) => {
  const { data: { user: { name, email, password } } } = req.body;
  const user = { name, email, password };
  try {
    const result = await UserService.add(user);
    return res.status(result.status).json(result.message);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const update = async (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;
  const user = { id, name, email, password };
  try {
    const result = await UserService.update(user);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    await UserService.destroy(id);
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getByPk, getAll, getByEmailAndPassword, getByEmail, add, update, destroy };
