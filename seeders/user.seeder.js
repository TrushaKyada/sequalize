const params = require('../config/params.json')


module.exports = {
    up: (queeyInterface, Sequelize) => {
        return queeyInterface.bulkInsert('users', [
            {
                username: "abc",
                email: "abc@gmail.com",
                mobile: "9545526363",
                gender: "male",
                city: "vadodara",
                Password: "",
                token: "",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: "pqr",
                email: "pqr@gmail.com",
                mobile: "9545526863",
                gender: "female",
                city: "rajkot",
                Password: "",
                token: "",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: "xyz",
                email: "xyz@gmail.com",
                mobile: "9544526863",
                gender: "male",
                city: "Junagadh",
                Password: "",
                token: "",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: "mansi",
                email: "mansiankoliya446@gmail.com",
                mobile: "9544522863",
                gender: "female",
                city: "jetpur",
                Password: "",
                token: "",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                username: "dishta",
                email: "dishta@gmail.com",
                mobile: "9244526863",
                gender: "female",
                city: "amreli",
                Password: "",
                token: "",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },
    down: (queeyInterface, Sequelize) => {
        return queeyInterface.bulkDelete('users', null, {});
    }
}