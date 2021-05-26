'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    cleanReview: DataTypes.INTEGER,
    locationReview: DataTypes.INTEGER,
    valueReview: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId'});
    Review.belongsTo(models.Spot, {foreignKey: 'spotId'});
  };

  Review.newReview = async function ({ userId, spotId, body, cleanReview, locationReview, valueReview }) {
    const newReview = await Review.create({
      userId, spotId, body, cleanReview, locationReview, valueReview
    });
    return await Review.findByPk(newReview.id);
  };
  Review.deleteReview = async function ({ id }) {
    const newReview = await Review.destroy({
      where: {id: id}
    });
    return await Review.findByPk(newReview.id);
  };
  return Review;
};
