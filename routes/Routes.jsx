const express = require('express');
const router = express.Router();

const { addSong } = require('../controller/AddSongController.jsx');
const {getAlbums, getSongById} = require("../controller/AlbumController.jsx");

// Get all songs
router.post('/add-song',addSong);
// Route to get all albums with their songs
router.get('/albums', getAlbums);

// Route to get a particular song by ID
router.get('/song/:album', getSongById);

module.exports = router;
