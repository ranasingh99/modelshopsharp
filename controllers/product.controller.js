const path = require('path');
const rootDir = require('../util/path');

const Product = require('../models/product.model');


exports.getaddproductcontroller = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

exports.postaddproductcontroller = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
  }  

exports.showshoproductscontroller = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }  