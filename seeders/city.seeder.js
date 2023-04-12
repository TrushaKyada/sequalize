const params = require('../config/params.json')


module.exports = {
    up: (queeyInterface, Sequelize) => {
        return queeyInterface.bulkInsert('city', [
            {
                cityName: "surat",
                state: "gujrat",
                people: "10",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: "Dispur",
                state: "Assam",
                people: "10",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: "Thiruvananthapuram",
                state: "Kerala",
                people: "10",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: "Gangtok",
                state: "Sikkim",
                people: "10",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                cityName: "Bhubaneswar",
                state: "Odisha",
                people: "10",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ])
    },
    down: (queeyInterface, Sequelize) => {
        return queeyInterface.bulkDelete('city', null, {});
    }
}