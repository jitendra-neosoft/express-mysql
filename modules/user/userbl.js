'use strict';

const userdb = require('./userdb');

module.exports.addUser = (req, res) => {
    let input = req.body;
    userdb.addUser(input, (err, data) => {
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).send(data);
    })
}