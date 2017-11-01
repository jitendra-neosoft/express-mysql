'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../db/db');

const User = sequelize.define('User', {
    id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    email: { 
        type: Sequelize.STRING, unique: true,allowNull: false,
        validate: {
            isEmail: true
        }
    },
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING },
    states: { type: Sequelize.ENUM, values: ['active', 'pending', 'deleted'] }
});

module.exports = User;