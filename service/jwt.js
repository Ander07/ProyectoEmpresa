'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var key = 'companyPass1103_Pass';

exports.createToken = (company) =>{
    var payload = {
        sub: company._id,
        name: company.name,
        email: company.email,
        role: company.role,
        iat: moment().unix(),
        exp: moment().add(3, "hours").unix()
    };
        return jwt.encode(payload, key);
        
}

