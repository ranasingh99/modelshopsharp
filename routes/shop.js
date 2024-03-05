
const express = require('express');


const shopControllers = require('../controllers/product.controller');

const router = express.Router();

router.get('/', shopControllers.showshoproductscontroller);

module.exports = router;
