const params = require('../config/params.json')


module.exports = {
    up: (queeyInterface, Sequelize) => {
        return queeyInterface.bulkInsert('state', [
            {
                state: "gujrat",
                country: "india",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                state: "Assam",
                country: "india",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                state: "Kerala",
                country: "india",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                state: "Sikkim",
                country: "india",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                state: "Odisha",
                country: "india",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ])
    },
    down: (queeyInterface, Sequelize) => {
        return queeyInterface.bulkDelete('users', null, {});
    }
}