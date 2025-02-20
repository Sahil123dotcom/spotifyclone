import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; 

// Fetch all songs
export const fetchSongs = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/songs`);
        return response.data; 
    } catch (error) {
        console.error('Error fetching songs:', error);
        return error;
    }
};
// export const fetchAlbums = async () => {
//   // console.log(JSON.stringify(albums))
//   try {
//     const response = await axios.get(`${BASE_URL}/albums`); // Fetch albums and their songs
//     return response.data; // Return the album data
//   } catch (error) {
//     console.error('Error fetching albums:', error);
//     return error; 
//   }
// };

export const getSongById = async (id) => {
  // console.log(JSON.stringify(songId))
  try {
   
    // const response = await axios.get(`${BASE_URL}/song/${id}`); // Fetch song by ID
    const response = await axios.get(`${BASE_URL}/albums`);
    return response.data; // Return the song data
  } catch (error) {
    console.error('Error fetching song:', error);
    return error; // Handle error gracefully
  }
};

export const getSongsByAlbum = async (albumId) => {
  try {
    const response = await axios.get(`${BASE_URL}/song/${albumId}`);
    return response.data; // Return the list of songs for the album
  } catch (error) {
    console.error('Error fetching songs:', error);
    return error;  // Return an empty array on error
  }
};


// Add a new song
export const addSong = async (songData) => {
  try {
      const response = await axios.post(`${BASE_URL}/add-song`, songData);
      console.log('Song added:', response.data);
      return response.data; 
  } catch (error) {
      console.error('Error adding song:', error);
      return error; 
  }
};


