'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var branchShema = Schema({
    name: String,
    address: String,
    phone: String,
    email: String,
    products: [{type: Schema.Types.ObjectId, ref: 'product'}],
    employees: [{type: Schema.Types.ObjectId, ref: 'employee'}] 
});

module.exports = mongoose.model('branch', branchShema);