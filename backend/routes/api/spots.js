const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Spot, Tag, Pic, Review } = require('../../db/models');
const Op = require('Sequelize').Op

const router = express.Router();




    router.get('/:tag', async(req, res) => {
        const tag = req.params.tag
        const spotsByTag = await Tag.findAll({
          where: {tag: tag},
          include: [{model: Spot, include: [{model: Pic}, {model: Review}, {model: Tag}]}]

        })
        res.json({spotsByTag})
      });

      router.get('/:search', async(req, res) => {
        const tag = req.params.tag
        const spotsByTag = await Tag.findAll({
          where: {tag: tag},
          include: [{model: Spot, include: [{model: Pic}, {model: Review}, {model: Tag}]}]

        })
        res.json({spotsByTag})
      });



module.exports = router;
