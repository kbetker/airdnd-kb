'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Pics', [
    {	picUrl:	'/images/interiorPhotos/001.jpg'	,	spotId:	1	},
{	picUrl:	'/images/interiorPhotos/002.jpg'	,	spotId:	2	},
{	picUrl:	'/images/interiorPhotos/003.jpg'	,	spotId:	3	},
{	picUrl:	'/images/interiorPhotos/004.jpg'	,	spotId:	4	},
{	picUrl:	'/images/interiorPhotos/005.jpg'	,	spotId:	5	},
{	picUrl:	'/images/interiorPhotos/006.jpg'	,	spotId:	6	},
{	picUrl:	'/images/interiorPhotos/007.jpg'	,	spotId:	7	},
{	picUrl:	'/images/interiorPhotos/008.jpg'	,	spotId:	8	},
{	picUrl:	'/images/interiorPhotos/009.jpg'	,	spotId:	9	},
{	picUrl:	'/images/interiorPhotos/010.jpg'	,	spotId:	10	},
{	picUrl:	'/images/interiorPhotos/011.jpg'	,	spotId:	11	},
{	picUrl:	'/images/interiorPhotos/012.jpg'	,	spotId:	12	},
{	picUrl:	'/images/interiorPhotos/013.jpg'	,	spotId:	13	},
{	picUrl:	'/images/interiorPhotos/014.jpg'	,	spotId:	14	},
{	picUrl:	'/images/interiorPhotos/015.jpg'	,	spotId:	15	},
{	picUrl:	'/images/interiorPhotos/016.jpg'	,	spotId:	16	},
{	picUrl:	'/images/interiorPhotos/017.jpg'	,	spotId:	17	},
{	picUrl:	'/images/interiorPhotos/018.jpg'	,	spotId:	18	},
{	picUrl:	'/images/interiorPhotos/019.jpg'	,	spotId:	19	},
{	picUrl:	'/images/interiorPhotos/020.jpg'	,	spotId:	20	},
{	picUrl:	'/images/interiorPhotos/021.jpg'	,	spotId:	21	},
{	picUrl:	'/images/interiorPhotos/022.jpg'	,	spotId:	22	},
{	picUrl:	'/images/interiorPhotos/023.jpg'	,	spotId:	23	},
{	picUrl:	'/images/interiorPhotos/024.jpg'	,	spotId:	24	},
{	picUrl:	'/images/interiorPhotos/025.jpg'	,	spotId:	25	},
{	picUrl:	'/images/interiorPhotos/026.jpg'	,	spotId:	26	},
{	picUrl:	'/images/interiorPhotos/027.jpg'	,	spotId:	27	},
{	picUrl:	'/images/interiorPhotos/028.jpg'	,	spotId:	28	},
{	picUrl:	'/images/interiorPhotos/029.jpg'	,	spotId:	29	},
{	picUrl:	'/images/interiorPhotos/001.jpg'	,	spotId:	30	},
{	picUrl:	'/images/interiorPhotos/002.jpg'	,	spotId:	31	},
{	picUrl:	'/images/interiorPhotos/003.jpg'	,	spotId:	32	},
{	picUrl:	'/images/interiorPhotos/004.jpg'	,	spotId:	33	},
{	picUrl:	'/images/interiorPhotos/005.jpg'	,	spotId:	34	},
{	picUrl:	'/images/interiorPhotos/006.jpg'	,	spotId:	35	},
{	picUrl:	'/images/interiorPhotos/007.jpg'	,	spotId:	36	},
{	picUrl:	'/images/interiorPhotos/008.jpg'	,	spotId:	37	},
{	picUrl:	'/images/interiorPhotos/009.jpg'	,	spotId:	38	},
{	picUrl:	'/images/interiorPhotos/010.jpg'	,	spotId:	39	},
{	picUrl:	'/images/interiorPhotos/011.jpg'	,	spotId:	40	},
{	picUrl:	'/images/interiorPhotos/012.jpg'	,	spotId:	41	},
{	picUrl:	'/images/interiorPhotos/013.jpg'	,	spotId:	42	},
{	picUrl:	'/images/interiorPhotos/014.jpg'	,	spotId:	43	},
{	picUrl:	'/images/interiorPhotos/015.jpg'	,	spotId:	44	},
{	picUrl:	'/images/interiorPhotos/016.jpg'	,	spotId:	45	},
{	picUrl:	'/images/interiorPhotos/017.jpg'	,	spotId:	46	},
{	picUrl:	'/images/interiorPhotos/018.jpg'	,	spotId:	47	},
{	picUrl:	'/images/interiorPhotos/019.jpg'	,	spotId:	48	},
{	picUrl:	'/images/interiorPhotos/020.jpg'	,	spotId:	49	},
{	picUrl:	'/images/interiorPhotos/021.jpg'	,	spotId:	50	},
{	picUrl:	'/images/interiorPhotos/022.jpg'	,	spotId:	51	},
{	picUrl:	'/images/interiorPhotos/023.jpg'	,	spotId:	52	},
{	picUrl:	'/images/interiorPhotos/024.jpg'	,	spotId:	53	},
{	picUrl:	'/images/interiorPhotos/025.jpg'	,	spotId:	54	},
{	picUrl:	'/images/interiorPhotos/026.jpg'	,	spotId:	55	},
{	picUrl:	'/images/interiorPhotos/027.jpg'	,	spotId:	56	},
{	picUrl:	'/images/interiorPhotos/028.jpg'	,	spotId:	57	},
{	picUrl:	'/images/interiorPhotos/029.jpg'	,	spotId:	58	},
{	picUrl:	'/images/interiorPhotos/005.jpg'	,	spotId:	1	},
{	picUrl:	'/images/interiorPhotos/006.jpg'	,	spotId:	2	},
{	picUrl:	'/images/interiorPhotos/007.jpg'	,	spotId:	3	},
{	picUrl:	'/images/interiorPhotos/008.jpg'	,	spotId:	4	},
{	picUrl:	'/images/interiorPhotos/009.jpg'	,	spotId:	5	},
{	picUrl:	'/images/interiorPhotos/010.jpg'	,	spotId:	6	},
{	picUrl:	'/images/interiorPhotos/011.jpg'	,	spotId:	7	},
{	picUrl:	'/images/interiorPhotos/012.jpg'	,	spotId:	8	},
{	picUrl:	'/images/interiorPhotos/013.jpg'	,	spotId:	9	},
{	picUrl:	'/images/interiorPhotos/014.jpg'	,	spotId:	10	},
{	picUrl:	'/images/interiorPhotos/015.jpg'	,	spotId:	11	},
{	picUrl:	'/images/interiorPhotos/016.jpg'	,	spotId:	12	},
{	picUrl:	'/images/interiorPhotos/017.jpg'	,	spotId:	13	},
{	picUrl:	'/images/interiorPhotos/018.jpg'	,	spotId:	14	},
{	picUrl:	'/images/interiorPhotos/019.jpg'	,	spotId:	15	},
{	picUrl:	'/images/interiorPhotos/020.jpg'	,	spotId:	16	},
{	picUrl:	'/images/interiorPhotos/021.jpg'	,	spotId:	17	},
{	picUrl:	'/images/interiorPhotos/022.jpg'	,	spotId:	18	},
{	picUrl:	'/images/interiorPhotos/023.jpg'	,	spotId:	19	},
{	picUrl:	'/images/interiorPhotos/024.jpg'	,	spotId:	20	},
{	picUrl:	'/images/interiorPhotos/025.jpg'	,	spotId:	21	},
{	picUrl:	'/images/interiorPhotos/026.jpg'	,	spotId:	22	},
{	picUrl:	'/images/interiorPhotos/027.jpg'	,	spotId:	23	},
{	picUrl:	'/images/interiorPhotos/028.jpg'	,	spotId:	24	},
{	picUrl:	'/images/interiorPhotos/029.jpg'	,	spotId:	25	},
{	picUrl:	'/images/interiorPhotos/001.jpg'	,	spotId:	26	},
{	picUrl:	'/images/interiorPhotos/002.jpg'	,	spotId:	27	},
{	picUrl:	'/images/interiorPhotos/003.jpg'	,	spotId:	28	},
{	picUrl:	'/images/interiorPhotos/004.jpg'	,	spotId:	29	},
{	picUrl:	'/images/interiorPhotos/005.jpg'	,	spotId:	30	},
{	picUrl:	'/images/interiorPhotos/006.jpg'	,	spotId:	31	},
{	picUrl:	'/images/interiorPhotos/007.jpg'	,	spotId:	32	},
{	picUrl:	'/images/interiorPhotos/008.jpg'	,	spotId:	33	},
{	picUrl:	'/images/interiorPhotos/009.jpg'	,	spotId:	34	},
{	picUrl:	'/images/interiorPhotos/010.jpg'	,	spotId:	35	},
{	picUrl:	'/images/interiorPhotos/011.jpg'	,	spotId:	36	},
{	picUrl:	'/images/interiorPhotos/012.jpg'	,	spotId:	37	},
{	picUrl:	'/images/interiorPhotos/013.jpg'	,	spotId:	38	},
{	picUrl:	'/images/interiorPhotos/014.jpg'	,	spotId:	39	},
{	picUrl:	'/images/interiorPhotos/015.jpg'	,	spotId:	40	},
{	picUrl:	'/images/interiorPhotos/016.jpg'	,	spotId:	41	},
{	picUrl:	'/images/interiorPhotos/017.jpg'	,	spotId:	42	},
{	picUrl:	'/images/interiorPhotos/018.jpg'	,	spotId:	43	},
{	picUrl:	'/images/interiorPhotos/019.jpg'	,	spotId:	44	},
{	picUrl:	'/images/interiorPhotos/020.jpg'	,	spotId:	45	},
{	picUrl:	'/images/interiorPhotos/021.jpg'	,	spotId:	46	},
{	picUrl:	'/images/interiorPhotos/022.jpg'	,	spotId:	47	},
{	picUrl:	'/images/interiorPhotos/023.jpg'	,	spotId:	48	},
{	picUrl:	'/images/interiorPhotos/024.jpg'	,	spotId:	49	},
{	picUrl:	'/images/interiorPhotos/025.jpg'	,	spotId:	50	},
{	picUrl:	'/images/interiorPhotos/026.jpg'	,	spotId:	51	},
{	picUrl:	'/images/interiorPhotos/027.jpg'	,	spotId:	52	},
{	picUrl:	'/images/interiorPhotos/028.jpg'	,	spotId:	53	},
{	picUrl:	'/images/interiorPhotos/029.jpg'	,	spotId:	54	},
{	picUrl:	'/images/interiorPhotos/001.jpg'	,	spotId:	55	},
{	picUrl:	'/images/interiorPhotos/002.jpg'	,	spotId:	56	},
{	picUrl:	'/images/interiorPhotos/003.jpg'	,	spotId:	57	},
{	picUrl:	'/images/interiorPhotos/004.jpg'	,	spotId:	58	},
{	picUrl:	'/images/interiorPhotos/008.jpg'	,	spotId:	1	},
{	picUrl:	'/images/interiorPhotos/009.jpg'	,	spotId:	2	},
{	picUrl:	'/images/interiorPhotos/010.jpg'	,	spotId:	3	},
{	picUrl:	'/images/interiorPhotos/011.jpg'	,	spotId:	4	},
{	picUrl:	'/images/interiorPhotos/012.jpg'	,	spotId:	5	},
{	picUrl:	'/images/interiorPhotos/013.jpg'	,	spotId:	6	},
{	picUrl:	'/images/interiorPhotos/014.jpg'	,	spotId:	7	},
{	picUrl:	'/images/interiorPhotos/015.jpg'	,	spotId:	8	},
{	picUrl:	'/images/interiorPhotos/016.jpg'	,	spotId:	9	},
{	picUrl:	'/images/interiorPhotos/017.jpg'	,	spotId:	10	},
{	picUrl:	'/images/interiorPhotos/018.jpg'	,	spotId:	11	},
{	picUrl:	'/images/interiorPhotos/019.jpg'	,	spotId:	12	},
{	picUrl:	'/images/interiorPhotos/020.jpg'	,	spotId:	13	},
{	picUrl:	'/images/interiorPhotos/021.jpg'	,	spotId:	14	},
{	picUrl:	'/images/interiorPhotos/022.jpg'	,	spotId:	15	},
{	picUrl:	'/images/interiorPhotos/023.jpg'	,	spotId:	16	},
{	picUrl:	'/images/interiorPhotos/024.jpg'	,	spotId:	17	},
{	picUrl:	'/images/interiorPhotos/025.jpg'	,	spotId:	18	},
{	picUrl:	'/images/interiorPhotos/026.jpg'	,	spotId:	19	},
{	picUrl:	'/images/interiorPhotos/027.jpg'	,	spotId:	20	},
{	picUrl:	'/images/interiorPhotos/028.jpg'	,	spotId:	21	},
{	picUrl:	'/images/interiorPhotos/029.jpg'	,	spotId:	22	},
{	picUrl:	'/images/interiorPhotos/001.jpg'	,	spotId:	23	},
{	picUrl:	'/images/interiorPhotos/002.jpg'	,	spotId:	24	},
{	picUrl:	'/images/interiorPhotos/003.jpg'	,	spotId:	25	},
{	picUrl:	'/images/interiorPhotos/004.jpg'	,	spotId:	26	},
{	picUrl:	'/images/interiorPhotos/005.jpg'	,	spotId:	27	},
{	picUrl:	'/images/interiorPhotos/006.jpg'	,	spotId:	28	},
{	picUrl:	'/images/interiorPhotos/007.jpg'	,	spotId:	29	},
{	picUrl:	'/images/interiorPhotos/008.jpg'	,	spotId:	30	},
{	picUrl:	'/images/interiorPhotos/009.jpg'	,	spotId:	31	},
{	picUrl:	'/images/interiorPhotos/010.jpg'	,	spotId:	32	},
{	picUrl:	'/images/interiorPhotos/011.jpg'	,	spotId:	33	},
{	picUrl:	'/images/interiorPhotos/012.jpg'	,	spotId:	34	},
{	picUrl:	'/images/interiorPhotos/013.jpg'	,	spotId:	35	},
{	picUrl:	'/images/interiorPhotos/014.jpg'	,	spotId:	36	},
{	picUrl:	'/images/interiorPhotos/015.jpg'	,	spotId:	37	},
{	picUrl:	'/images/interiorPhotos/016.jpg'	,	spotId:	38	},
{	picUrl:	'/images/interiorPhotos/017.jpg'	,	spotId:	39	},
{	picUrl:	'/images/interiorPhotos/018.jpg'	,	spotId:	40	},
{	picUrl:	'/images/interiorPhotos/019.jpg'	,	spotId:	41	},
{	picUrl:	'/images/interiorPhotos/020.jpg'	,	spotId:	42	},
{	picUrl:	'/images/interiorPhotos/021.jpg'	,	spotId:	43	},
{	picUrl:	'/images/interiorPhotos/022.jpg'	,	spotId:	44	},
{	picUrl:	'/images/interiorPhotos/023.jpg'	,	spotId:	45	},
{	picUrl:	'/images/interiorPhotos/024.jpg'	,	spotId:	46	},
{	picUrl:	'/images/interiorPhotos/025.jpg'	,	spotId:	47	},
{	picUrl:	'/images/interiorPhotos/026.jpg'	,	spotId:	48	},
{	picUrl:	'/images/interiorPhotos/027.jpg'	,	spotId:	49	},
{	picUrl:	'/images/interiorPhotos/028.jpg'	,	spotId:	50	},
{	picUrl:	'/images/interiorPhotos/029.jpg'	,	spotId:	51	},
{	picUrl:	'/images/interiorPhotos/001.jpg'	,	spotId:	52	},
{	picUrl:	'/images/interiorPhotos/002.jpg'	,	spotId:	53	},
{	picUrl:	'/images/interiorPhotos/003.jpg'	,	spotId:	54	},
{	picUrl:	'/images/interiorPhotos/004.jpg'	,	spotId:	55	},
{	picUrl:	'/images/interiorPhotos/001.jpg'	,	spotId:	56	},
{	picUrl:	'/images/interiorPhotos/002.jpg'	,	spotId:	57	},
{	picUrl:	'/images/interiorPhotos/003.jpg'	,	spotId:	58	},
{	picUrl:	'/images/interiorPhotos/004.jpg'	,	spotId:	1	},
{	picUrl:	'/images/interiorPhotos/014.jpg'	,	spotId:	2	},
{	picUrl:	'/images/interiorPhotos/015.jpg'	,	spotId:	3	},
{	picUrl:	'/images/interiorPhotos/016.jpg'	,	spotId:	4	},
{	picUrl:	'/images/interiorPhotos/017.jpg'	,	spotId:	5	},
{	picUrl:	'/images/interiorPhotos/018.jpg'	,	spotId:	6	},
{	picUrl:	'/images/interiorPhotos/019.jpg'	,	spotId:	7	},
{	picUrl:	'/images/interiorPhotos/020.jpg'	,	spotId:	8	},
{	picUrl:	'/images/interiorPhotos/021.jpg'	,	spotId:	9	},
{	picUrl:	'/images/interiorPhotos/022.jpg'	,	spotId:	10	},
{	picUrl:	'/images/interiorPhotos/023.jpg'	,	spotId:	11	},
{	picUrl:	'/images/interiorPhotos/024.jpg'	,	spotId:	12	},
{	picUrl:	'/images/interiorPhotos/025.jpg'	,	spotId:	13	},
{	picUrl:	'/images/interiorPhotos/026.jpg'	,	spotId:	14	},
{	picUrl:	'/images/interiorPhotos/027.jpg'	,	spotId:	15	},
{	picUrl:	'/images/interiorPhotos/028.jpg'	,	spotId:	16	},
{	picUrl:	'/images/interiorPhotos/029.jpg'	,	spotId:	17	},
{	picUrl:	'/images/interiorPhotos/001.jpg'	,	spotId:	18	},
{	picUrl:	'/images/interiorPhotos/002.jpg'	,	spotId:	19	},
{	picUrl:	'/images/interiorPhotos/003.jpg'	,	spotId:	20	},
{	picUrl:	'/images/interiorPhotos/004.jpg'	,	spotId:	21	},
{	picUrl:	'/images/interiorPhotos/005.jpg'	,	spotId:	22	},
{	picUrl:	'/images/interiorPhotos/006.jpg'	,	spotId:	23	},
{	picUrl:	'/images/interiorPhotos/007.jpg'	,	spotId:	24	},
{	picUrl:	'/images/interiorPhotos/008.jpg'	,	spotId:	25	},
{	picUrl:	'/images/interiorPhotos/009.jpg'	,	spotId:	26	},
{	picUrl:	'/images/interiorPhotos/010.jpg'	,	spotId:	27	},
{	picUrl:	'/images/interiorPhotos/011.jpg'	,	spotId:	28	},
{	picUrl:	'/images/interiorPhotos/012.jpg'	,	spotId:	29	},
{	picUrl:	'/images/interiorPhotos/013.jpg'	,	spotId:	30	},
{	picUrl:	'/images/interiorPhotos/014.jpg'	,	spotId:	31	},
{	picUrl:	'/images/interiorPhotos/015.jpg'	,	spotId:	32	},
{	picUrl:	'/images/interiorPhotos/016.jpg'	,	spotId:	33	},
{	picUrl:	'/images/interiorPhotos/017.jpg'	,	spotId:	34	},
{	picUrl:	'/images/interiorPhotos/018.jpg'	,	spotId:	35	},
{	picUrl:	'/images/interiorPhotos/019.jpg'	,	spotId:	36	},
{	picUrl:	'/images/interiorPhotos/020.jpg'	,	spotId:	37	},
{	picUrl:	'/images/interiorPhotos/021.jpg'	,	spotId:	38	},
{	picUrl:	'/images/interiorPhotos/022.jpg'	,	spotId:	39	},
{	picUrl:	'/images/interiorPhotos/023.jpg'	,	spotId:	40	},
{	picUrl:	'/images/interiorPhotos/024.jpg'	,	spotId:	41	},
{	picUrl:	'/images/interiorPhotos/025.jpg'	,	spotId:	42	},
{	picUrl:	'/images/interiorPhotos/026.jpg'	,	spotId:	43	},
{	picUrl:	'/images/interiorPhotos/027.jpg'	,	spotId:	44	},
{	picUrl:	'/images/interiorPhotos/028.jpg'	,	spotId:	45	},
{	picUrl:	'/images/interiorPhotos/029.jpg'	,	spotId:	46	},
{	picUrl:	'/images/interiorPhotos/001.jpg'	,	spotId:	47	},
{	picUrl:	'/images/interiorPhotos/002.jpg'	,	spotId:	48	},
{	picUrl:	'/images/interiorPhotos/003.jpg'	,	spotId:	49	},
{	picUrl:	'/images/interiorPhotos/004.jpg'	,	spotId:	50	},
{	picUrl:	'/images/interiorPhotos/008.jpg'	,	spotId:	51	},
{	picUrl:	'/images/interiorPhotos/009.jpg'	,	spotId:	52	},
{	picUrl:	'/images/interiorPhotos/010.jpg'	,	spotId:	53	},
{	picUrl:	'/images/interiorPhotos/011.jpg'	,	spotId:	54	},
{	picUrl:	'/images/interiorPhotos/012.jpg'	,	spotId:	55	},
{	picUrl:	'/images/interiorPhotos/013.jpg'	,	spotId:	56	},
{	picUrl:	'/images/interiorPhotos/014.jpg'	,	spotId:	57	},
{	picUrl:	'/images/interiorPhotos/015.jpg'	,	spotId:	58	},

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pics', null, {});
   }
 };
