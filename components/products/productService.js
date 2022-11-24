const { connection } = require('../../db');
const productRepository = require('./productRepository');

exports.getAll = (callback) => {
  productRepository.getAll(callback);
}
