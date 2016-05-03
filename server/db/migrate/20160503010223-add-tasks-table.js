'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE()
      },
      updatedAt: {
        type: Sequelize.DATE()
      },
      name: {
        type: Sequelize.STRING(200),
        index: true
      }
    }).then(function () {
      return queryInterface.addIndex('tasks', ['name']);
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('tasks');
  }
};
