const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
    {
        email: {type: String, required: true},
        password: {type: String, required: true},
        role: {type: String}
    }
)

const Usuario = mongoose.model('usuario', usuarioSchema);

module.exports = Usuario;