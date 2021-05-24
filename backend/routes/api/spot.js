const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Spot, Tag, Pic } = require('../../db/models');

const router = express.Router();



router.get('/:id', async(req, res) => {
      const id = req.params.id
      const spotById = await Spot.findOne({
        where: {id: id},
        include: [{model: Tag}, {model: Pic}]

      })
       res.json(spotById)
    });


module.exports = router;
