const productService = require('./productService');

exports.list = (req, res) => {
  productService.getAll((err, products) => {
    console.log(products);
    res.render('products/list', products);
  });
};

exports.details = (req, res) => {

  res.render('products/details');
}