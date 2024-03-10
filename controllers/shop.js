const { fileLoader } = require('ejs');
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([rows,fiealdset])=>{
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Products',
      path: '/products'
    });
  })
  .catch(err=>{console.log(err)})
    
  
};
exports.getProduct = (req,res,next)=>{
  const prodId = req.params.productId;
  Product.findById(prodId,product =>{
    //console.log(product);
    res.render('shop/product-detail',{
      product:product,
      pageTitle:product.title,
      path:'/products'
    });
  })
 
}
exports.getIndex = (req, res, next) => {
  Product.fetchAll().then(([rows,fiealdset])=>{
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
    });
  })
  .catch(err=>console.log(err));
    
  }


exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart =(req,res,next) =>{
  const prodId = req.body.productId;
  console.log(prodId);
  res.redirect('/cart')
}
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
