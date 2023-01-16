const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const songsRouter = require('./src/api/routes/song.routes');
const albumsRouter = require('./src/api/routes/album.routes');
const usuariosRouter = require('./src/api/routes/usuario.routes');
dotenv.config();
const { urlencoded } = require('express');
const {connect} = require('./src/utils/database');
const PORT = process.env.PORT || 5000;
const app = express();
connect();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use('/songs', songsRouter)
app.use('/albums', albumsRouter)
app.use('/usuarios', usuariosRouter)
app.listen(PORT, () => console.log('listening on port', PORT));