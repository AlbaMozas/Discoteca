const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema(
    {
        title:{type: 'string', required: true},
        year:{type: 'number', required: true},
        artist:{type: 'string'},
        songs: [ {type: Schema.Types.ObjectId, ref: 'song'}],
        imgCover:{type: 'string'}
    }
)

const Album = mongoose.model('album', albumSchema);

module.exports = Album;