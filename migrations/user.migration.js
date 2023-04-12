module.exports = {

    up: (QueryInterface, Sequelize) => {
        return QueryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            username: {
                type: Sequelize.STRING(20)
            },
            email: {
                type: Sequelize.STRING(50)
            },
            mobile: {
                type: Sequelize.STRING(50)
            },
            gender: {
                type: Sequelize.STRING(10)
            },
            city: {
                type: Sequelize.STRING(50)
            },
            Password: {
                type: Sequelize.TEXT
            },
            token: {
                type: Sequelize.STRING(500)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};

