module.exports = {

    up: (QueryInterface, Sequelize) => {
        return QueryInterface.createTable('city', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            state_id: {
                type: Sequelize.INTEGER(20)
            },
            cityName: {
                type: Sequelize.STRING(50)
            },
            state: {
                type: Sequelize.STRING(50)
            },
            people: {
                type: Sequelize.INTEGER(100)
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
        return queryInterface.dropTable('city');
    }
};

