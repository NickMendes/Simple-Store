const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWT_SECRET = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });
const JWT_OPTIONS = { algorithm: 'HS256', expiresIn: '1d' };

const createToken = (payload) => {
  const token = jwt.sign({ user: payload }, JWT_SECRET, JWT_OPTIONS);
  
  return token;
};

const verifyToken = (token) => {
  const payload = jwt.verify(token, JWT_SECRET);
  return payload;
};

const checkToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { createToken, verifyToken, checkToken };