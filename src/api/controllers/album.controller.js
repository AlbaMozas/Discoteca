const Album = require('../models/album.model');

const getAlbums = async(req, res) => {
    try {
        const albums = await Album.find().populate('songs');
        return res.status(200).json(albums);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getAlbum = async(req, res) => {
    try {
        const {id} = req.params;
        const albums = await Album.findById(id).populate('songs'); //POPULATE coge los id's de tu campo y los busca en la otra tabla a través de la referencia (Schema.Types.ObjectId, ref: 'songs')
        
        return res.status(200).json(albums);
    } catch (error) {
        return res.status(500).json(error);
    }
}


const postAlbums = async(req, res) => {
    try {
        const newAlbum = new Album(req.body);
        const createdAlbum = await newAlbum.save();
        return res.status(201).json(createdAlbum);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const putAlbums = async(req, res) => {
    try {
        const {id} = req.params;
        const putAlbum = new Album(req.body);
        putAlbum._id = id;
        
        const updatedAlbum = await Album.findByIdAndUpdate(id, putAlbum, {new: true});
        return res.status(200).json(updatedAlbum);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteAlbums = async(req, res) => {
    try {
        const {id} = req.params;
        const deletedAlbum = await Album.findByIdAndDelete(id);
        return res.status(200).json(deletedAlbum);
    } catch (error) {
        
    }
}


module.exports = {getAlbums, getAlbum, postAlbums, putAlbums, deleteAlbums}