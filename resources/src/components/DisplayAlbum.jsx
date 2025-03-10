import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import { fetchAlbumsBySinger } from "../services/Auth"; // Import API function
import Navbar from "./Navbar";
import { assets } from "../../public/assets/assets";

const DisplayAlbum = () => {
  const { singer } = useParams() || ""; // Get singer ID from the URL

  // console.log(result)
  const playerContext = useContext(PlayerContext);
  const playWithId = playerContext?.playWithId || (() => {}); // Safe function access
  const [albumData, setAlbumData] = useState(null);
  const [albumSongs, setAlbumSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        if(singer){
          const {albums} = await fetchAlbumsBySinger(singer); // Pass singer ID
          console.log(albums)
          if (albums) {
            setAlbumData(albums[0]); // Assuming first album for display
            setAlbumSongs(albums[0]?.songs || []);

          }
        }     
      } catch (error) {
        console.error("Error fetching album:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [singer]); // Runs when `singer` changes

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!albumData) return <p className="text-center mt-10">No album found.</p>;

  return (
    <div className="p-4">
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded"
          src={albumData.image || assets.default_album}
          alt={albumData.name}
        />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              src={assets.spotify_logo}
              alt="Spotify Logo"
              className="inline-block w-5"
            />
            <b> Spotify</b>. 1,16416,647 likes .{" "}
            <b>{albumSongs.length} Songs</b>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-gray-500">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Artist</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Duration" />
      </div>

      {albumSongs.length > 0 ? (
        <ul className="mt-2 border rounded p-2">
          {albumSongs.map((song, index) => (
            <li
              key={song.id}
              className="grid grid-cols-3 sm:grid-cols-4 p-2 border-b cursor-pointer hover:bg-gray-200"
              onClick={() => playWithId(song.id)}
            >
              <div className="flex gap-3">
                <span>{index + 1}</span>
                <img
                  src={song.image || assets.default_song}
                  alt={song.name}
                  className="w-12 h-12 rounded"
                />
                <div>
                  <h4 className="font-bold">{song.name}</h4>
                  <p className="text-sm text-gray-500">
                    {song.artist || "Unknown Artist"}
                  </p>
                </div>
              </div>
              <p>{song.album || "Unknown Album"}</p>
              <p className="hidden sm:block">
                {song.artist || "Unknown Artist"}
              </p>
              <p>{song.duration || "--:--"}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center mt-4">No songs available for this album.</p>
      )}
    </div>
  );
};

export default DisplayAlbum;
