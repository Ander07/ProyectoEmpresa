'use strict'

var express = require('express');
var employeeController = require('../controller/employee.controller');

var api = express.Router();

api.post('/saveEmployee', employeeController.saveEmployees);
api.put('/updateEmployee/:id', employeeController.updateEmployee);
api.delete('/deleteEmployee/:id', employeeController.deleteEmployee);
api.get('/listEmployees', employeeController.listEmployees);
api.get('/findEmployee', employeeController.findEmployees);

module.exports = api;