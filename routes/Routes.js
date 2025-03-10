const express = require('express');
const router = express.Router();

const { addSong, getAllSongs, getSongsByAlbum, deleteSong, updateSong, getAlbumsBySinger } = require("../controller/SongsController.js");

// Routes


router.post("/add", addSong); // Add a song

router.get("/albums/singer", getAlbumsBySinger);
// console.log("Request received for singer:"); 


router.get("/", getAllSongs); // Get all songs
router.get("/:album_id", getSongsByAlbum); // Get songs by album
router.put("/:song_id", updateSong); // Update a song
router.delete("/:song_id", deleteSong); // Delete a song


module.exports = router;
