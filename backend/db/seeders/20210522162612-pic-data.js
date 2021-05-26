'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Pics', [
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},
    {picUrl: faker.random.image(), spotId: faker.datatype.number({'min': 1, 'max': 25})},

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pics', null, {});
   }
 };