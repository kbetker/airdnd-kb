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
      const spots = await Tag.findAll({
        where: {tag: tag},
        include: [{model: Spot, include: [{model: Pic}, {model: Review}, {model: Tag}]}]

      })
      res.json({spots})
    });

    router.get('/search/:title', async(req, res) => {
        const title = req.params.title
        titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
        const spots = await Spot.findAll({
          where: {
            [Op.or]: [
              { title: {[Op.startsWith]: titleUpperCase} },
              { title: {[Op.regexp]: title} },
              { title: {[Op.substring]: title} }
            ]
          },
          include: [{model: Pic}, {model: Review}, {model: Tag}]
        })
        res.json({spots})
      });

      router.get('/myspots/:id', async(req, res) => {
        const id = req.params.id
        const myspots = await Spot.findAll({
          where: {
            ownerId: id
          }
          // include: [{model: Pic}, {model: Review}, {model: Tag}]
        })
        res.type('json').send(JSON.stringify(myspots, null, 2) + '\n');

        // res.json({myspots})
      });



module.exports = router;
