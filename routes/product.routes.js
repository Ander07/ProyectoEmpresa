'use strict'

var express = require('express');
var productController = require('../controller/products.controller');
var middlewereAuth = require('../middlewares/authenticated');
var companyController = require('../controller/company.controller');

var api = express.Router();

api.post('/saveProduct', middlewereAuth.ensureAuth, productController.saveProduct);
api.put('/updateProduct/:id', middlewereAuth.ensureAuth, productController.updateProduct);
api.delete('/deleteProduct/:id', middlewereAuth.ensureAuth, productController.deteleProduct);
api.get('/listProducts', productController.listProducts);



module.exports = api;