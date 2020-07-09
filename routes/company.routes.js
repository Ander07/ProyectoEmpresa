'use strict'

var express = require('express');
var companyController = require('../controller/company.controller');
var middlewereAuth = require('../middlewares/authenticated');

var api = express.Router();

//Routes CRUD companies
api.post('/saveCompany',companyController.saveCompany);
api.put('/updateCompany/:id', middlewereAuth.ensureAuth,companyController.updateCompany);
api.delete('/deleteCompany/:id', middlewereAuth.ensureAuth,companyController.deleteCompany);
api.post('/loginCompany', companyController.login);


//Others routes
api.put('/setEmployees/:id', middlewereAuth.ensureAuth,companyController.setEmployees);
api.get('/listEmployees/:id', middlewereAuth.ensureAuth,companyController.listEmployees);
api.put('/:idC/removeEmployee/:idE', middlewereAuth.ensureAuth,companyController.removeEmployee);
api.get('/listCompaniesE', middlewereAuth.ensureAuth,companyController.listCompaniesE);
api.get('/listCompaniesP', middlewereAuth.ensureAuth,companyController.listCompaniesP);
api.put('/setProduct/:id', middlewereAuth.ensureAuth,companyController.setProduct);
api.put('/setBranch/:id', middlewereAuth.ensureAuth, companyController.setBranch);
api.put('/removeProduct/:idC', middlewereAuth.ensureAuth,companyController.removeProduct);


//Routes search
api.get('/searchProductCompany/:id', middlewereAuth.ensureAuth, companyController.searchProductCompany);




module.exports = api;