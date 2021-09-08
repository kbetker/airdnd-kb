'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    tag: DataTypes.STRING,
    spotId: DataTypes.INTEGER
  }, {});
  Tag.associate = function(models) {
    Tag.belongsTo(models.Spot, {foreignKey: "spotId", onDelete: 'CASCADE'});
  };
  return Tag;
};
