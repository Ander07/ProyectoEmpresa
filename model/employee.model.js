'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var registroSchema = Schema({
    name: String,
    lastname: String,
    dpi: Number,
    phone: String,
    place: String,
    department: String
});

module.exports = mongoose.model('employee', registroSchema);