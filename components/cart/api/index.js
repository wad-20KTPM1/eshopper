const express = require('express');
const router = express.Router();

const cartApiController = require('./cartApiController');

router.post('/add', cartApiController.add);
router.get('/', cartApiController.cartDetail);

module.exports = router;