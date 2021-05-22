'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      spotId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Spots'}
      },
      body: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      cleanReview: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      locationReview: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      valueReview: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews');
  }
};
