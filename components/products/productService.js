const Paginator = require('paginator');

const { connection } = require('../../db');
const productRepository = require('./productRepository');
const { ITEM_PER_PAGE, TOTAL_PAGING_LINK } = require('../../constant');

exports.getAll = () => {
  return productRepository.getAll();
}

exports.getProducts = (page) => productRepository.getProducts(page);

exports.getProductsWithPaging = async (page) =>{
  const products = await productRepository.getProducts(page);
  const productCount = await productRepository.count();
  const paginator = new Paginator(ITEM_PER_PAGE, TOTAL_PAGING_LINK);
  return {products, paging: paginator.build(productCount, page)};
}

exports.filter = (name) => {
  return productRepository.filter(name);
}

exports.get = (id) => productRepository.get(id);
