const express = require('express');

const controller = require('../../api/controllers/product.controllder');

const router = express.Router();


router.get('/products',controller.showProduct);

module.exports = router;