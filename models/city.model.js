const Sequelize = require('sequelize');
const sequalize = require('../database/conn');


const city = sequalize.define('city', {
    state_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "state",
            key: "state_id"
        }
    },
    cityName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    people: {
        type: Sequelize.STRING,
        allowNull: true
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});



module.exports = city;