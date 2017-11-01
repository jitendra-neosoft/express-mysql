'use strict';

const config = require('../../config/config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DBNAME, config.DBUSER, config.DBPWD, {
    host: config.DBHOST,
    port: config.DBPORT,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: false,
    operatorsAliases: false
});

sequelize
    .authenticate()
    .then(() => {
        console.log('DB connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

sequelize.sync({ force: false, match: /lizer$/ });

module.exports = sequelize;