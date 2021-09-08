const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Spot, Tag, Pic, Review, User } = require('../../db/models');

const router = express.Router();


router.post('/new', async (req, res) => {
  // const wat = await Spot.findAll()
  const { title, location, coordinateX, coordinateY, price, description, ownerId, mainPic, allowsFamiliar } = req.body;

  const newSpot = await Spot.newSpot({ title, location, coordinateX, coordinateY, price, description, ownerId, mainPic, allowsFamiliar })
  return res.json({
    newSpot,
  });
});



router.get('/:id', async (req, res) => {
  const id = req.params.id
  const spotById = await Spot.findOne({
    where: { id: id },
    include: [{ model: User }, { model: Tag }, { model: Pic }, { model: Review, include: User }]

  })
  res.json(spotById)
});


router.put('/:id/edit', async (req, res) => {
  const id = req.params.id
  console.log(id, req.body, "WTFWTFWTFWTFWTFWTFWTFW")
  const { title, location, coordinateX, coordinateY, price, description, ownerId, mainPic, allowsFamiliar } = req.body;
  const editThis = await Spot.findOne({
    where: { id: id }
  })

  let response = await editThis.update(
    {
      title,
       location,
       coordinateX,
       coordinateY,
       price,
       description,
       ownerId,
       mainPic,
       allowsFamiliar
    })
  return res.json({ response });
});




router.delete('/:id/delete', async(req, res) => {
  const id = req.params.id
   await Spot.destroy({
    where: {id: id}
  })
   res.json({"id": id})
});






module.exports = router;
