const SaleProductService = require('../service/saleProductService');

const getAll = async (_req, res) => {
  try {
    const result = await SaleProductService.getAll();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getBySaleId = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await SaleProductService.getBySaleId(id);
      return res.status(200).json(result);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  };

const getById = async (req, res) => {
  const { saleId, productId } = req.body;
  try {
    const result = await SaleProductService.getById(saleId, productId);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const add = async (req, res) => {
  try {
    const result = await SaleProductService.add(req.body);
    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const update = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await SaleProductService.update(id, req.body);
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    await SaleProductService.destroy(id);
    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getById, add, update, destroy, getBySaleId };
