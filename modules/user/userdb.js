'use strict';

const User = require('./usermodel');

module.exports.addUser = (input, callback) => {
    User.create(input)
        .then((data) => {
            callback(null, data)
        })
        .catch((err) => {
            callback(err)
        })
}