
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {type: 'string', required: true},
    artist:{type: 'string', required: true},
    style:{type: 'string'},
    year:{type: 'number', required: true}
    
}
)

const Song = mongoose.model('song', songSchema);

module.exports = Song;