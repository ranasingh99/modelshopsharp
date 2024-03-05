
const express = require('express');

const router = express.Router();

const adminProductControllers = require('../controllers/product.controller');

router.get('/add-product', adminProductControllers.getaddproductcontroller);

router.post('/add-product',adminProductControllers.postaddproductcontroller);

module.exports = router;