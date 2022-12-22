const productService = require('../productService');
const createError = require('http-errors');
const qs = require('qs');
const Paginator = require('paginator');

const { ITEM_PER_PAGE, TOTAL_PAGING_LINK } = require('../../../constant');

exports.list = async (req, res) => {
  let { name: nameFilter, page } = req.query;
  if (isNaN(page) || !Number.isInteger(parseFloat(page)) || page < 1) {
    page = 1;
  }
  let products;
  if (nameFilter)
    products = await productService.filter(nameFilter);
  else
    products = await productService.getProductsWithPaging(parseInt(page));
  res.json(products);
};
