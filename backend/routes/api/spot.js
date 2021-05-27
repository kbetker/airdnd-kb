const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Spot, Tag, Pic, Review, User } = require('../../db/models');

const router = express.Router();


router.post('/new', async(req, res) => {
  // const wat = await Spot.findAll()
  const { title, location, coordinateX, coordinateY, price, description, ownerId, mainPic, allowsFamiliar } = req.body;

  const newSpot = await Spot.newSpot({ title, location, coordinateX, coordinateY, price, description, ownerId, mainPic, allowsFamiliar })
  return res.json({
    newSpot,
  });
  });



  router.get('/:id', async(req, res) => {
        const id = req.params.id
        const spotById = await Spot.findOne({
          where: {id: id},
          include: [{model: User}, {model: Tag}, {model: Pic}, {model: Review, include: User}]

        })
         res.json(spotById)
      });

module.exports = router;
