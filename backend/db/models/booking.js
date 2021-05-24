'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    hostId: DataTypes.INTEGER,
    bookerId: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    spotId: DataTypes.INTEGER,
    numGuests: DataTypes.INTEGER,

  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Spot, { foreignKey: "spotId" });
    Booking.belongsTo(models.User, { foreignKey: "hostId" });
    Booking.belongsTo(models.User, { foreignKey: "bookerId" });
  };
  return Booking;
};
