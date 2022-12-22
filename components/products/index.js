const express = require('express');
const router = express.Router();

const productController = require('./productController');
// pages
router.get('/', productController.list);
router.get('/:productId', productController.details);

module.exports = router;
