// const faker = require('faker');
// let tags = ['swamp', 'woodland', 'mountain', 'city', 'plain', 'underworld', 'coastal', 'jungle', 'tundra'];
// // console.log(faker.datatype.number({'min': 15, 'max': 1000, 'precision': 0.01}))
// let arr = [];
// newArr = () =>{
//     arr = []
//     for(let i = 0; i < 8; i++){
//         let randomImage = faker.random.image()
//         arr.push(randomImage)
//     }
//     return arr
// }

// console.log(tags[faker.datatype.number({'min': 1, 'max': 14})])
// console.log(tags[faker.datatype.number({'min': 0, 'max': 8})])
// console.log(tags[faker.datatype.number({'min': 0, 'max': 8})])
// console.log(tags[faker.datatype.number({'min': 0, 'max': 8})])
// faker.datatype.number({'min': 1, 'max': 640})

// faker.datatype.number({'min': 1, 'max': 480})

let cssColor = [ "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen", ]

const typeTags = ["type-entireHome", "type-uniqueGetaway", "type-privateRoom", "type-sharedRoom", "type-entireHome", "type-privateRoom", "type-entireHome", "type-privateRoom"]
const terrainTags = ["terrain-Alpine Lake", "terrain-Arctic", "terrain-Badlands", "terrain-Barren", "terrain-Bay", "terrain-Beach", "terrain-Bog", "terrain-Caldera", "terrain-Canals", "terrain-Canyon", "terrain-Caves", "terrain-Crags", "terrain-Crater", "terrain-Desert", "terrain-Forest", "terrain-Glacier", "terrain-Grassland", "terrain-Hills", "terrain-Jungle", "terrain-Lake", "terrain-Lava Field", "terrain-Marsh", "terrain-Meadow", "terrain-Mountain", "terrain-Prairie", "terrain-Rain Forest", "terrain-Sand Dunes", "terrain-Seaside", "terrain-Sewers", "terrain-Swamp", "terrain-Tundra", "terrain-Underdark", "terrain-Valley", "terrain-Volcanic", "terrain-Wastelands", "terrain-Wheat Field", "terrain-Wildlands", ]
const nearbyTags = [ "nearby-Almraiven", "nearby-Bildoobaris", "nearby-Chethel", "nearby-Citadel Adbar", "nearby-Citadel of Ten Thousand Pearls", "nearby-Derlusk", "nearby-Dhaztanar", "nearby-Earthfast", "nearby-Elbulder", "nearby-Elturel", "nearby-Escalant", "nearby-Esmeltaran", "nearby-Everlund", "nearby-Hlammach", "nearby-Hlath", "nearby-Immilmar", "nearby-Iriaebor", "nearby-Kuda", "nearby-Lushpool", "nearby-Luskan", "nearby-Mintar", "nearby-Nathlekh", "nearby-Neverwinter", "nearby-Okahira", "nearby-Orvyltar", "nearby-Phandalin", "nearby-Phlan", "nearby-Phsant", "nearby-Proskur", "nearby-Reth", "nearby-Schamedar", "nearby-Sloopdilmonpolop", "nearby-Ss'zuraass'nee", "nearby-Sundabar", "nearby-Tamanokuni", "nearby-Taruin", "nearby-Telflamm", "nearby-Telos ", "nearby-Trailsend", "nearby-Tsurlagol", "nearby-Tukan", "nearby-Ubar", "nearby-Ulatos", "nearby-Urmlaspyr", "nearby-Vilkstead", "nearby-Waterdeep", "nearby-Yeshpek", "nearby-Yhaunn", "nearby-Zhentil Keep"]

console.log("typeTags", typeTags.length)
console.log("terrainTags", terrainTags.length)
console.log("nearbyTags", nearbyTags.length)

// function FindPosition(oElement)
// {
//   if(typeof( oElement.offsetParent ) != "undefined")
//   {
//     for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
//     {
//       posX += oElement.offsetLeft;
//       posY += oElement.offsetTop;
//     }
//       return [ posX, posY ];
//     }
//     else
//     {
//       return [ oElement.x, oElement.y ];
//     }
// }

// function GetCoordinates(e)
// {
//   let PosX = 0;
//   let PosY = 0;
//   let ImgPos;
//   ImgPos = FindPosition(getXY);
//   if (!e) var e = window.event;
//   if (e.pageX || e.pageY)
//   {
//     PosX = e.pageX;
//     PosY = e.pageY;
//   }
//   else if (e.clientX || e.clientY)
//     {
//       PosX = e.clientX + document.body.scrollLeft
//         + document.documentElement.scrollLeft;
//       PosY = e.clientY + document.body.scrollTop
//         + document.documentElement.scrollTop;
//     }
//   PosX = PosX - ImgPos[0];
//   PosY = PosY - ImgPos[1];
//   console.log("X", PosX)
//   console.log("Y", PosY)
//   document.getElementById("x").innerHTML = PosX;
//   document.getElementById("y").innerHTML = PosY;
// }




// let profileArray = [
// 'images/profile/profile-default.png',
// 'images/profile/profilepic_Barbarian.png',
// 'images/profile/profilepic_Bard.png',
// 'images/profile/profilepic_Cleric.png',
// 'images/profile/profilepic_Druid.png',
// 'images/profile/profilepic_EmeraldEnclave.png',
// 'images/profile/profilepic_Fighter.png',
// 'images/profile/profilepic_Harpers.png',
// 'images/profile/profilepic_LordsAlliance.png',
// 'images/profile/profilepic_Monk.png',
// 'images/profile/profilepic_orderOfGauntlet.png',
// 'images/profile/profilepic_Paladin.png',
// 'images/profile/profilepic_Ranger.png',
// 'images/profile/profilepic_Rogue.png',
// 'images/profile/profilepic_Sorcerer.png',
// 'images/profile/profilepic_Warlock.png',
// 'images/profile/profilepic_Wizard.png',
// 'images/profile/profilepic_Zhentarium.png',
// ]
let housePics = [ "/images/houses/01.jpg", "/images/houses/02.jpg", "/images/houses/03.jpg", "/images/houses/04.jpg", "/images/houses/05.jpg", "/images/houses/06.jpg", "/images/houses/07.jpg", "/images/houses/08.jpg", "/images/houses/09.jpg", "/images/houses/010.jpg", "/images/houses/011.jpg", "/images/houses/012.jpg", "/images/houses/013.jpg", "/images/houses/014.jpg", "/images/houses/015.jpg", "/images/houses/016.jpg", "/images/houses/017.jpg", "/images/houses/018.jpg", "/images/houses/019.jpg", "/images/houses/020.jpg", "/images/houses/021.jpg", "/images/houses/022.jpg", "/images/houses/023.jpg", "/images/houses/024.jpg", "/images/houses/025.jpg", "/images/houses/026.jpg", "/images/houses/027.jpg", "/images/houses/028.jpg",]

let interiorPhotos = [ "/images/interiorPhotos/001", "/images/interiorPhotos/002", "/images/interiorPhotos/003", "/images/interiorPhotos/004", "/images/interiorPhotos/005", "/images/interiorPhotos/006", "/images/interiorPhotos/007", "/images/interiorPhotos/008", "/images/interiorPhotos/009", "/images/interiorPhotos/010", "/images/interiorPhotos/011", "/images/interiorPhotos/012", "/images/interiorPhotos/013", "/images/interiorPhotos/014", "/images/interiorPhotos/015", "/images/interiorPhotos/016", "/images/interiorPhotos/017", "/images/interiorPhotos/018", "/images/interiorPhotos/019", "/images/interiorPhotos/020", "/images/interiorPhotos/021", "/images/interiorPhotos/022", "/images/interiorPhotos/023", "/images/interiorPhotos/024", "/images/interiorPhotos/025", "/images/interiorPhotos/026", "/images/interiorPhotos/027", "/images/interiorPhotos/028", "/images/interiorPhotos/029",
]
