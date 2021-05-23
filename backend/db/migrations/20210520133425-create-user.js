'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true,
      },
      hashedPassword: {
        type: Sequelize.STRING.BINARY,
        allowNull: false,
      },
      isHost: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
      },
      about: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      profilePic: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      profileBackgroundColor: {
        type: Sequelize.STRING,
        default: 'black',
      },
      profileForegroundColor: {
        type: Sequelize.STRING,
        default: 'white',
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
    return queryInterface.dropTable('Users');
  }
};
