const mongoose = require("mongoose");
const Album= require('../api/models/album.model');


const dotenv = require('dotenv');

dotenv.config();

const DB_URL = process.env.DB_URL;


const albums=[
    //albun A mi me gusta
    {
    "_id": "63c1646805edd17dd4f5ab0d",
        "title": "A Mi Me Gusta",
        "year": 1993,
        "artist": "los del rio",
        "songs": ["63c148c5b9f57d8a14036cfc","63c15f1e28bfe6f5ee825cfa"],
        "imgCover":"https://upload.wikimedia.org/wikipedia/en/b/ba/A_m%C3%AD_me_gusta.jpg"
    },
    //albun Buena Vista Social Club
    {
        "_id": "63c164ea05edd17dd4f5ab0f",
        "title": "Buena Vista Social Club",
        "year": 1992,
        "artist": "Los Viejitos",
        "songs": [ ]
    },
    //albun te cure
    {
        "_id": "63c2bbde85e83d89f63b6987",
        "title": "Boys Don't",
        "year": 1980,
        "artist": "The Cure",
        "songs": ["63c29f4d7ddf01e2a8632939","63c29f4d7ddf01e2a863293a","63c29f4d7ddf01e2a863293b" ],
        "imgCover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJWQwALqmFvhfFjZqKAzBQjau0M710NPpdxA&usqp=CAU"
    },
    //albun los adolecentes
    {
        "_id": "63c2bbde85e83d89f63b6988",
        "title": "Persona Ideal",
        "year": 2005,
        "artist": "Los Adolecentes",
        "songs": ["63c29f4d7ddf01e2a863293c","63c29f4d7ddf01e2a863293d","63c29f4d7ddf01e2a863293e" ],
        "img.Cover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0odlT1prdgU0jSdZVGeCwB69O7NJZW3sIRg&usqp=CAU"
    },
    // albun mana
    {
        "_id": "63c2bbde85e83d89f63b6989",
        "title": "Amar es Combatir",
        "year": 2006,
        "artist": "Mana",
        "songs": ["63c29f4d7ddf01e2a863293f","63c29f4d7ddf01e2a8632940","63c29f4d7ddf01e2a8632941" ],
        "imgCover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBYmlzIOwPhh95l0ii7lg1glesKMaFFmUtCQ&usqp=CAU"
    },
    // albun blink 182
    {
        "_id": "63c2bbde85e83d89f63b698a",
        "title": "Take Off Your Pants and Jacket",
        "year": 2001,
        "artist": "Blink-18",
        "songs": [ "63c29f4d7ddf01e2a8632942","63c29f4d7ddf01e2a8632943","63c29f4d7ddf01e2a8632944"],
        "imgCover":"https://cms.kerrang.com/images/blink-182-Take-Off-Your-Pants-And-Jacket.jpg"
    },
    //albun red hot
    {
        "_id": "63c2bbde85e83d89f63b698b",
        "title": "Californications",
        "year": 1997,
        "artist": "The Red Hot Chili Peppers",
        "songs": ["63c29f4d7ddf01e2a8632945","63c29f4d7ddf01e2a8632946","63c29f4d7ddf01e2a8632947" ],
        "imgCover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSncviJzG7jNkhjyNPQ3GEgEieemqKyo2hRg&usqp=CAU"
    }
]



mongoose.set("strictQuery", false);
//Acordaos de cambiar la URL de la BBDD

mongoose.connect( DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allAlbum = await Album.find();
    if(allAlbum.length > 0) {
        await Album.collection.drop();
        console.log('Album Delete');
    }
}).catch((error) => console.log("error Delete Album", error))
.then(async () => {
    const albumMap = albums.map((album) => new Album(album));
    await Album.insertMany(albumMap);
    console.log("insert Album")
})
.catch((error) => console.log("error insert Album", error))
.finally(() => mongoose.disconnect());







