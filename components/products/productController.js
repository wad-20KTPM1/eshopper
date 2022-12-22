const productService = require('./productService');
const createError = require('http-errors');
const qs = require('qs');

exports.list = async (req, res) => {
  // const { name: nameFilter } = req.query;
  // let products = [];
  // if (nameFilter)
  //   products = await productService.filter(nameFilter);
  // else
  //   products = await productService.getAll();
  // const {sort, ...withoutSort} = req.query;
  // res.render('products/list', {products, originalUrl: `${req.baseUrl}?${qs.stringify(withoutSort)}`});
  res.render('products/list');
};

exports.details = async (req, res, next) => {
  const { productId } = req.params;
  const product = await productService.get(productId);
  if (!product) return next(createError(404));
  res.render('products/details', {product});
};