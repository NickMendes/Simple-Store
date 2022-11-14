const SaleService = require('../service/saleService');

const getAll = async (_req, res) => {
  try {
    const result = await SaleService.getAll();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await SaleService.getById(id);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await SaleService.getByUserId(userId);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const add = async (req, res) => {
  try {
    const result = await SaleService.add(req.body);
    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  
  try {
    const result = await SaleService.update(id, req.body);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    await SaleService.destroy(id);
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getById, getByUserId, add, update, destroy };
