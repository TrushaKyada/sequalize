module.exports = {

    up: (QueryInterface, Sequelize) => {
        return QueryInterface.createTable('state', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            state: {
                type: Sequelize.STRING(50)
            },
            country: {
                type: Sequelize.STRING(100)
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
        return queryInterface.dropTable('state');
    }
};

