const express = require('express');
const {getAlbums, getAlbum, postAlbums, putAlbums, deleteAlbums} = require('../controllers/album.controller');
const {isAuth} = require('../../middleware/auth');
const {isAdmin} = require('../../middleware/auth');
const router = express.Router();

router.get('/', getAlbums);
router.get('/:id', getAlbum);
router.post('/',[isAuth], postAlbums);// con autenticación
router.put('/:id',[isAdmin], putAlbums);// con autenticación y admin
router.delete('/:id',[isAdmin], deleteAlbums);// con autenticación y admin

module.exports = router;