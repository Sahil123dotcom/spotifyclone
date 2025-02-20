const db = require("../db/index.jsx");

// Get all albums with their songs
const getAlbums = async (req, res) => {
  try {
    // Fetch all distinct album names from the 'songs' table
    const albums = await db('songs').distinct('album'); // Assuming 'album' field exists in the 'songs' table

    if (albums.length === 0) {
      return res.status(404).json({ message: 'No albums found' });
    }

    // Fetch all songs for each album
    const albumsWithSongs = await Promise.all(
      albums.map(async (album) => {
        const songs = await db('songs').where({ album: album.album }); // Fetch songs for the specific album
        return {
          album: album.album,
          songs
        };
      })
    );

    res.json(albumsWithSongs); // Return albums and their songs
  } catch (error) {
    console.error('Error fetching albums:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a particular song by ID
const getSongById = async (req, res) => {
    const { album } = req.params;  // Get album name or ID from URL
    console.log("🟢 Album received in API:", album)
  
    console.log("Requested Album:", album);  // Debugging log
  
    try {
      // Query to fetch songs based on album name or album ID
      const songs = await db('songs').where({ album }) // Ensure column name matches (e.g., 'album' or 'album_id')
  
      if (songs.length === 0) {
        return res.status(404).json({ error: 'No songs found for this album' });
      }
  
      res.json(songs);  // Return all songs related to the album
    } catch (error) {
      console.error("Error fetching songs:", error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

module.exports = { getAlbums, getSongById };

