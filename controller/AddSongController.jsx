const db = require("../db/index.jsx");

const addSong = async (req, res) => {
    try {
      const { title, artist, album, image, audio_url } = req.body; // Use correct field names
  
      console.log("Received Request Body:", req.body); // Debugging log
  
      // Validate request body
      if (!title || !artist || !album || !image || !audio_url) {
        return res.status(400).json({ error: "All fields (title, artist, album, image, audio_url) are required." });
      }
  
      // Insert into database
      const [newSong] = await db("songs")
        .insert({ title, artist, album, image, audio_url })
        .returning("*");
  
      console.log("Inserted Song:", newSong);
      res.status(201).json({ message: "Song added successfully", song: newSong });
    } catch (error) {
      console.error("Error adding song:", error);
      res.status(500).json({ error: "Internal server error", details: error.message });
    }
  };
  
  module.exports = { addSong };
  