'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pic = sequelize.define('Pic', {
    picUrl: DataTypes.STRING,
    spotId: DataTypes.INTEGER
  }, {});
  Pic.associate = function(models) {
    Pic.belongsTo(models.Spot, {foreignKey: "spotId", onDelete: 'CASCADE'});
  };
  return Pic;
};
