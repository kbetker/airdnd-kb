'use strict';
let tags = ['swamp', 'woodland', 'mountain', 'city', 'plain', 'underworld', 'coastal', 'jungle', 'tundra'];
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Tags', [
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},
      {tag: tags[faker.datatype.number({'min': 0, 'max': 8})], spotId: faker.datatype.number({'min': 1, 'max': 25})},



   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Tags', null, {});
  }
};
