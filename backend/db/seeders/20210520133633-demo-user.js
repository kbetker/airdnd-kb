'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');
let cssColor = [ "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen", ]

// bcrypt.hashSync(faker.internet.password()),

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [

    {	name:	'Demo'	,	username:	'demo-user'	,	email:	'demo@demo.com'	,	hashedPassword:	bcrypt.hashSync('password')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},
    {	name:	'James Monroe'	,	username:	faker.internet.userName()	,	email:	faker.internet.email()	,	hashedPassword:	bcrypt.hashSync('rollInitNat20')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},
    {	name:	'Larry Busfield'	,	username:	faker.internet.userName()	,	email:	faker.internet.email()	,	hashedPassword:	bcrypt.hashSync('rollInitNat20')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},
    {	name:	'Mary Kemp'	,	username:	faker.internet.userName()	,	email:	faker.internet.email()	,	hashedPassword:	bcrypt.hashSync('rollInitNat20')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},
    {	name:	'Zachary Fenton'	,	username:	faker.internet.userName()	,	email:	faker.internet.email()	,	hashedPassword:	bcrypt.hashSync('rollInitNat20')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},
    {	name:	'Bart Hempworth'	,	username:	faker.internet.userName()	,	email:	faker.internet.email()	,	hashedPassword:	bcrypt.hashSync('rollInitNat20')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},
    {	name:	'Jeremy Renner'	,	username:	faker.internet.userName()	,	email:	faker.internet.email()	,	hashedPassword:	bcrypt.hashSync('rollInitNat20')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},
    {	name:	'Hank Blaylock'	,	username:	faker.internet.userName()	,	email:	faker.internet.email()	,	hashedPassword:	bcrypt.hashSync('rollInitNat20')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},
    {	name:	'Caomh Flyn'	,	username:	faker.internet.userName()	,	email:	faker.internet.email()	,	hashedPassword:	bcrypt.hashSync('rollInitNat20')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},
    {	name:	'Bredon Smith'	,	username:	faker.internet.userName()	,	email:	faker.internet.email()	,	hashedPassword:	bcrypt.hashSync('rollInitNat20')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},
    {	name:	'Darcy Lynch'	,	username:	faker.internet.userName()	,	email:	faker.internet.email()	,	hashedPassword:	bcrypt.hashSync('rollInitNat20')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},
    {	name:	'Owyn Reid'	,	username:	faker.internet.userName()	,	email:	faker.internet.email()	,	hashedPassword:	bcrypt.hashSync('rollInitNat20')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},
    {	name:	'Riley Carter'	,	username:	faker.internet.userName()	,	email:	faker.internet.email()	,	hashedPassword:	bcrypt.hashSync('rollInitNat20')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},
    {	name:	'Tammy Frerichs'	,	username:	faker.internet.userName()	,	email:	faker.internet.email()	,	hashedPassword:	bcrypt.hashSync('rollInitNat20')	,	isHost:	true	,	about:	faker.lorem.paragraphs()	,	profilePic:	faker.image.avatar()	,	profilePicColor:	cssColor[faker.datatype.number({'min': 0, 'max': 146})]	},



  ], {});
  },

 down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
