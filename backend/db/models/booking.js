'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    hostId: DataTypes.INTEGER,
    bookerId: DataTypes.INTEGER,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    spotId: DataTypes.INTEGER,
    numGuests: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Spot, { foreignKey: "spotId" });
  };
  return Booking;
};
