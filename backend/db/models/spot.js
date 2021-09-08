'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    coordinateX: DataTypes.INTEGER,
    coordinateY: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10, 2),
    description: DataTypes.TEXT,
    region: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    mainPic: DataTypes.STRING,
    allowsFamiliar: DataTypes.BOOLEAN
  }, {});
  Spot.associate = function(models) {
    Spot.belongsTo(models.User, { foreignKey: "ownerId" });
    Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: 'true' });
    Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: 'true' });
    Spot.hasMany(models.Tag, {foreignKey: "spotId",  onDelete: 'CASCADE', hooks: 'true'});
    Spot.hasMany(models.Pic, {foreignKey: "spotId"});

  };

  Spot.newSpot = async function ({ title, location, coordinateX, coordinateY, price, description, ownerId, mainPic, allowsFamiliar }) {
    const spot = await Spot.create({
      title,
      location,
      coordinateX,
      coordinateY,
      price,
      description,
      ownerId,
      mainPic,
      allowsFamiliar
    });
    return await Spot.findByPk(spot.id);
  };
  return Spot;
};
