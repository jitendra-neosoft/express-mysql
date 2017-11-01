'use strict';

const express = require('express');
const router = express.Router();
const userbl = require('./userbl');

router.post('/add', userbl.addUser);

module.exports = router;