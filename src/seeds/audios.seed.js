const mongoose = require("mongoose");
const Song= require('../api/models/song.model');

const dotenv = require('dotenv');

dotenv.config();

const DB_URL = process.env.DB_URL;

const audios=[
    {
        "_id": "63c148c5b9f57d8a14036cfc",
        "title": "la macarena",
        "year": 1993,
        "artist": "los del rio",
        "style": "pop"
    },
    {
        "_id": "63c15f1e28bfe6f5ee825cfa",
        "title": "Mi gitana",
        "artist": "los del rio",
        "style": "pop",
        "year": 2008,
        "__v": 0
    },
    // canciones de the cure Boys Don't
    {
        "_id": "63c29f4d7ddf01e2a8632939",
        "title": "Boys Don't",
        "artist": "The Cure",
        "style": "Post-punk, New Wave",
        "year": 1980,
    },
    {
        "_id": "63c29f4d7ddf01e2a863293a",
        "title": "Plastic Passion",
        "artist": "The Cure",
        "style": "Post-punk, New Wave",
        "year": 1980,
    }, 
    {
        "_id":"63c29f4d7ddf01e2a863293b",
        "title": "Accuracy",
        "artist": "The Cure",
        "style": "Post-punk, New Wave",
        "year": 1980,
    },
// canciones de los adolecentes Persona ideal
    {
        "_id":"63c29f4d7ddf01e2a863293c",
        "title": "Persona ideal",
        "artist": "Los Adolecentes",
        "style": "Salsa",
        "year": 2005,
    },
    {
        "_id":"63c29f4d7ddf01e2a863293d",
        "title": "Fanatico",
        "artist": "Los Adolecentes",
        "style": "Salsa",
        "year": 2005,
    },  
    {
        "_id":"63c29f4d7ddf01e2a863293e",
        "title": "Clase social",
        "artist": "Los Adolecentes",
        "style": "Salsa",
        "year": 2005,
    },
   //caciones de Mana albun amar es combatir
   {
    "_id":"63c29f4d7ddf01e2a863293f",
    "title": "Manda Una Señal",
    "artist": "Mana",
    "style": "Rock, Pop rock, Rock latino, Rock en español, Dub",
    "year": 2006,
},
{
    "_id":"63c29f4d7ddf01e2a8632940",
    "title": "Ojala Pudiera Borrarte",
    "artist": "Mana",
    "style": "Rock, Pop rock, Rock latino, Rock en español, Dub",
    "year": 2006,
},
{
    "_id":"63c29f4d7ddf01e2a8632941",
    "title": "Bendita tu luz",
    "artist": "Mana",
    "style": "Rock, Pop rock, Rock latino, Rock en español, Dub",
    "year": 2006,
},
// canciones blink 182 albun Take Off Your Pants and Jacket
{
    "_id":"63c29f4d7ddf01e2a8632942",
    "title": "Firt Date",
    "artist": "Blink-182",
    "style": "Punk, Pop punk, Rock alternativo",
    "year": 2001,
},
{
    "_id":"63c29f4d7ddf01e2a8632943",
    "title": "The Rock Show",
    "artist": "Blink-182",
    "style": "Punk, Pop punk, Rock alternativo",
    "year": 2001,
},
{
    "_id":"63c29f4d7ddf01e2a8632944",
    "title": "Stay Together For The Kids",
    "artist": "Blink-182",
    "style": "Punk, Pop punk, Rock alternativo",
    "year": 2001,
},
// canciones the red hot chili peppers albun californications
{
    "_id":"63c29f4d7ddf01e2a8632945",
    "title": "Californication",
    "artist": "The Red Hot Chili Peppers",
    "style": "Rock alternativo, Funk rock",
    "year": 1997,
},
{
    "_id":"63c29f4d7ddf01e2a8632946",
    "title": "Otherside",
    "artist": "The Red Hot Chili Peppers",
    "style": "Rock alternativo, Funk rock",
    "year": 1997,
},{
    "_id":"63c29f4d7ddf01e2a8632947",
    "title": "Scar Tissue",
    "artist": "The Red Hot Chili Peppers",
    "style": "Rock alternativo, Funk rock",
    "year": 1997,
}
];

mongoose.set("strictQuery", false);


mongoose.connect( DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allAudio = await Song.find();
    if(allAudio.length > 0) {
        await Song.collection.drop();
        console.log('Song Delete');
    }
}).catch((error) => console.log("error Delete audios", error))
.then(async () => {
    const songMap = audios.map((audio) => new Song(audio));
    await Song.insertMany(songMap);
    console.log("insert audios")
})
.catch((error) => console.log("error insert audios", error))
.finally(() => mongoose.disconnect());
