'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookings', [

  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},
  {	hostId:	faker.datatype.number({'min': 1, 'max': 14})	,	bookerId:	faker.datatype.number({'min': 1, 'max': 14})	,	startDate:	'12-01-01'	,	endDate:	'12-02-01'	,	spotId:	faker.datatype.number({'min': 1, 'max': 14})	,	numGuests:	faker.datatype.number({'min': 1, 'max': 14})	},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bookings', null, {});
   }
 };
