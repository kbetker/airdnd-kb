'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 50]
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
    isHost:{
      type: DataTypes.BOOLEAN,
      default: false,
    },
    about:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    profilePic:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileBackgroundColor:{
      type: DataTypes.STRING,
      default: 'black',
    },
    profileForegroundColor:{
      type: DataTypes.STRING,
      default: 'white',
    },

  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });
  User.associate = function(models) {

    const columnMappingBooker = {
      through: 'Bookings',
      foreignKey: 'bookerId',
      otherKey: 'hostId',
      as: 'booker' //
    }
    const columnMappingHost = {
      through: 'Bookings',
      foreignKey: 'hostId',
      otherKey: 'bookerId',
      as: 'host'
    }


    const columnMappingMessageSender = {
      through: 'Messages',
      otherKey: 'senderId',
      foreignKey: 'receiverId',
      as: 'sender' //
    }
    const columnMappingMessageReceiver = {
      through: 'Messages',
      otherKey: 'receiverId',
      foreignKey: 'senderId',
      as: 'receiver'
    }

    User.hasMany(models.Review, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: 'true' });
    User.hasMany(models.Spot, { foreignKey: 'ownerId', onDelete: 'CASCADE', hooks: 'true' });
    User.belongsToMany(models.Booking, columnMappingBooker);
    User.belongsToMany(models.Booking, columnMappingHost);
    // User.hasMany(models.Booking, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: 'true' });

    User.belongsToMany(models.Message, columnMappingMessageSender);
    User.belongsToMany(models.Message, columnMappingMessageReceiver);
    // User.hasMany(models.Message, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: 'true' });

  };

  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, username, email, profileBackgroundColor, profilePic } = this; // context will be the User instance
    return { id, username, email, profileBackgroundColor, profilePic };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
   };

   User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
   };

   User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ name, username, email, password, about, profilePic, profileBackgroundColor }) {

    console.log( name, username, email, password, about, profilePic, profileBackgroundColor )
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      name, username, email, hashedPassword, about, profilePic, profileBackgroundColor


    });
    return await User.scope('currentUser').findByPk(user.id);
  };


  return User;
};
