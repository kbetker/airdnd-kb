const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Spot, Tag, Pic, Review, Booking, User } = require('../../db/models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

const router = express.Router();

router.post('/new', async (req, res) => {
    // const wat = await Spot.findAll()
    const { hostId, bookerId, startDate, endDate, spotId, numGuests } = req.body;

    const booking = await Booking.create({
        hostId,
        bookerId,
        startDate,
        endDate,
        spotId,
        numGuests
    });

    return res.json({ booking });
});


router.get('/:id', async(req, res) => {
    const id = req.params.id
    const booking = await Booking.findOne({
      where: {id: id}
    //   include: [{model: User}, {model: Tag}, {model: Pic}, {model: Review, include: User}]

    })
     res.json(booking)
  });

  router.get('/all/:id', async(req, res) => {
    const id = req.params.id
    const booking = await Booking.findAll({
      where: {bookerId: id},
      include: [{model: Spot, include: User}]

    })
    res.type('json').send(JSON.stringify(booking, null, 2) + '\n');
    //  res.json(booking)
  });

  module.exports = router;
