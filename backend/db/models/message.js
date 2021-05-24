'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    senderId: DataTypes.INTEGER,
    receiverId: DataTypes.INTEGER,
    message: DataTypes.TEXT
  }, {});
  Message.associate = function(models) {
    Message.belongsTo(models.User, { foreignKey: "senderId" });
    Message.belongsTo(models.User, { foreignKey: "receiverId" });

  };
  return Message;
};
