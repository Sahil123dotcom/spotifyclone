const db = require("../db/index.js");


const getAlbumsBySinger = async (req, res) => {
  try {

    const { singer } = req.query;

    // const {params} = req.body; // Get singer name from URL params
    // res.json({ message: `Fetching albums for ${params}` });
    // console.log("Singer received:", singer);
    // console.log(singer)
    // const {params} = req.body;
    // console.log(req.body)

    const albums = await db("albums")
    .where("artist", "LIKE", `%${"Trending India"}%`) // ✅ Regex-like search (MySQL, SQLite)
    .select("id", "artist");
    // return


    if (albums.length === 0) {
      return res.status(404).json({ error: "No albums found for this singer" });
    }

    // Fetch songs for each album
    for (let album of albums) {
      const songs = await db("songs")
        .where({ album_id: album.id })
        .select("id", "title", "image", "audio_url");
      album.songs = songs; // Attach songs inside the album object
    }

    res.json({ singer, albums });

  } catch (error) {
    console.error("Error fetching albums:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};




const addSong = async (req, res) => {
  try {
    const { title, artist, album_id, image, audio_url } = req.body;

    // Validate input
    if (!title || !artist || !album_id || !image || !audio_url) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Insert song into the database
    const sql = `
        INSERT INTO songs (title, artist, album_id, image, audio_url) 
        VALUES (?, ?, ?, ?, ?)
      `;
    const [newSong] = await db("songs")
      .insert({ title, artist, album_id, image, audio_url })
      .returning("*"); // Returns the newly inserted row

    res.status(201).json({ message: "Song added successfully", song: newSong });


    res.status(201).json({ message: "Song added successfully" });
  } catch (error) {
    console.error("Error adding song:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllSongs = async (req, res) => {
  try {
    const songs = await db("songs").select("*"); // Fetch all songs

    if (songs.length === 0) {
      return res.status(404).json({ message: "No songs found" });
    }

    res.json(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSongsByAlbum = async (req, res) => {
  try {
    const albumId = req.params.album_id; // Get album_id from the request

    // Fetch songs by album_id
    const songs = await db("songs").where({ album_id: albumId });

    if (songs.length === 0) {
      return res.status(404).json({ error: "No songs found for this album" });
    }

    res.json({ album_id: albumId, songs });
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteSong = async (req, res) => {
  try {
    const { song_id } = req.params; // Get song_id from request

    const deleted = await db("songs").where({ id: song_id }).del();

    if (!deleted) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song deleted successfully" });
  } catch (error) {
    console.error("Error deleting song:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateSong = async (req, res) => {
  try {
    const { song_id } = req.params;
    const { title, artist, album_id, image, audio_url } = req.body;

    const updated = await db("songs").where({ id: song_id }).update({
      title,
      artist,
      album_id,
      image,
      audio_url,
      updated_at: new Date(),
    });

    if (!updated) {
      return res.status(404).json({ error: "Song not found" });
    }

    res.json({ message: "Song updated successfully" });
  } catch (error) {
    console.error("Error updating song:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};





module.exports = { getAlbumsBySinger, addSong, getAllSongs, getSongsByAlbum, deleteSong, updateSong };
