const productService = require('../service/productService');

const getAll = async (_req, res) => {
  try {
    const result = await productService.getAll();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await productService.getById(id);
    if (!result) return res.status(404).json({ message: 'Produto não encontrado' });

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error' });
  }
};

const add = async (req, res) => {
  const { name, price, description, url } = req.body;
  const product = { name, price, description, url };
  try {
    const result = await productService.add(product);
    
    return res.status(200).json(result);
  }catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error' });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, url } = req.body;
  const product = { id, name, price, description, url };
  try {
    const result = await productService.update(product);
    if (!result) return res.status(404).json({ message: 'Produto não encontrado' });

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error' });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await productService.destroy(id);
    if (!result) return res.status(404).json({ message: 'Produto não encontrado' });

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error' });
  }
};

module.exports = { 
  getAll,
  getById,
  add,
  update,
  destroy,
};
