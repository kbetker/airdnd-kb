const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Spot, Tag, Pic, Review, User } = require('../../db/models');

const router = express.Router();


router.post('/new', async(req, res) => {
  console.log("HELLO FROM THE BACKEND NEW REVIEW", req.body)
  const { userId, spotId, body, cleanReview, locationReview, valueReview} = req.body;

  const newReview = await Review.newReview({userId, spotId, body, cleanReview, locationReview, valueReview})
  return res.json({
        newReview,
  });
  });


  router.delete('/delete/:id', async(req, res)=> {
    const { id } = req.params
    res.send(`${id}`)
    const deltaco = await Review.deleteReview(id)
    return res.json({ deltaco })
  })


module.exports = router;
