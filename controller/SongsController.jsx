const db = require("../db/index.jsx");

const getSongs = async (req, res) => {
    try {
        const songs = await db('songs').select('*');
        res.json(songs);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
};

module.exports = { getSongs };
