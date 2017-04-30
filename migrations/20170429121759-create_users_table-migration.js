'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable(
            'users',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                email: {
                    type: Sequelize.STRING,
                    unique: true
                },
                password: {
                    type: Sequelize.STRING
                },
                firstname: {
                    type: Sequelize.STRING
                },
                lastname: {
                    type: Sequelize.STRING
                },
                tel: {
                    type: Sequelize.STRING
                },
                gender: {
                    type: Sequelize.STRING
                },
                birthday: {
                    type: Sequelize.STRING
                },
                created_at: {
                    type: Sequelize.DATE
                },
                updated_at: {
                    type: Sequelize.DATE
                },

            },
            {}
        )
    },

    down: function (queryInterface, Sequelize) {
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         return queryInterface.dropTable('users');
         */
    }

};
