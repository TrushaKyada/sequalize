const Sequelize = require('sequelize');
const sequalize = require('../database/conn');


const state = sequalize.define('state', {
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: true
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});


  
module.exports = state;