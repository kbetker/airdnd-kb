const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Spot, Tag, Pic, Review } = require('../../db/models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

const router = express.Router();




    router.get('/:tag', async(req, res) => {
      const tag = req.params.tag
      const spotsByTag = await Tag.findAll({
        where: {tag: tag},
        include: [{model: Spot, include: [{model: Pic}, {model: Review}, {model: Tag}]}]

      })
      res.json({spotsByTag})
    });

    router.get('/search/:title', async(req, res) => {
        const title = req.params.title
        titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
        const spotsByTitle = await Spot.findAll({
          where: {
            [Op.or]: [
              { title: {[Op.startsWith]: titleUpperCase} },
              { title: {[Op.regexp]: title} },
              { title: {[Op.substring]: title} }
            ]
          }
          // include: [{model: Pic}, {model: Review}, {model: Tag}]
        })
        res.json({spotsByTitle})
      });



module.exports = router;
