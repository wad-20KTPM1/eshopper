const { connection } = require('../../db');
const productRepository = require('./productRepository');

exports.getAll = () => {
  return productRepository.getAll();
}

exports.filter = (name) => {
  return productRepository.filter(name);
}


exports.get = (id) => productRepository.get(id);
