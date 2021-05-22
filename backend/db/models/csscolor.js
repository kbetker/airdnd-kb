'use strict';
module.exports = (sequelize, DataTypes) => {
  const CssColor = sequelize.define('CssColor', {
    colorName: DataTypes.STRING,
    hexName: DataTypes.STRING
  }, {});
  CssColor.associate = function(models) {
    // associations can be defined here
  };
  return CssColor;
};