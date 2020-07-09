'use strict'

var express = require('express');
var branchController = require('../controller/branch.controller');
var middlewereAuth = require('../middlewares/authenticated');

var api = express.Router();

//Routes CRUD branch
api.post('/saveBranch', middlewereAuth.ensureAuth, branchController.saveBranch);
api.put('/updateBranch/:id', middlewereAuth.ensureAuth, branchController.updateBranch);
api.delete('/deleteBranch/:id', middlewereAuth.ensureAuth, branchController.deleteBranch);
api.get('/listBranchs', middlewereAuth.ensureAuth, branchController.listBranchs);

//Others routes
api.put('/setProduct/:id', middlewereAuth.ensureAuth, branchController.setProduct);
api.put('/setEmployee/:id', middlewereAuth.ensureAuth, branchController.setEmployees);
api.get('/listProducts', middlewereAuth.ensureAuth, branchController.listProducts);
api.get('/listEmployees', middlewereAuth.ensureAuth, branchController.listEmployees);
api.get('/searchProducts/:id', middlewereAuth.ensureAuth, branchController.searchProductB);
api.put('/removeProduct/:idB', middlewereAuth.ensureAuth, branchController.removeProduct);

//PDF
api.get('/pdfBranch/:id', middlewereAuth.ensureAuth, branchController.pdfProductsBranch);


module.exports = api;