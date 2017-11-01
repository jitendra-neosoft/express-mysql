'use strict';

require('dotenv').config();

module.exports = {
    PORT    : process.env.PORT,
    DBHOST  : process.env.DBHOST,
    DBPORT  : process.env.DBPORT,
    DBNAME  : process.env.DBNAME,
    DBUSER  : process.env.DBUSER,
    DBPWD   : process.env.DBPWD
}