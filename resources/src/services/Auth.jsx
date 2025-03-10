import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; 


export const fetchSongs = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/`);
        return response.data; 
    } catch (error) {
        console.error('Error fetching songs:', error);
        return error;
    }
};


export const fetchAlbumsBySinger = async (singerName) => {
    console.log(singerName, "dvsdzvds");
    try {
        const response = await axios.get(`${BASE_URL}/albums/singer`, {
            params: { singer: singerName } // Pass data as query params
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching albums:', error);
        return error;
    }
};






export const getSongsByAlbum = async (albumId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${albumId}`); // FIXED: Correct API route
        return response.data;
    } catch (error) {
        console.error('Error fetching songs for album:', error);
        return error;
    }
};


export const addSong = async (songData) => {
    try {
        const response = await axios.post(`${BASE_URL}/add`, songData); // FIXED: Correct API route
        console.log('Song added:', response.data);
        return response.data; 
    } catch (error) {
        console.error('Error adding song:', error);
        return error; 
    }
};

export const deleteSong = async (songId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${songId}`);
        console.log('Song deleted:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting song:', error);
        return error;
    }
};

export const updateSong = async (songId, updatedData) => {
    try {
        const response = await axios.put(`${BASE_URL}/${songId}`, updatedData);
        console.log('Song updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating song:', error);
        return error;
    }
};
