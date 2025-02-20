// import React, { useContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { assets } from '../assets/assets';
// import { PlayerContext } from '../context/PlayerContext';
// import { fetchAlbums, getSongById } from "../services/Auth";
// import Navbar from './Navbar';

// // alert(JSON.stringify(albumData))
// // console.log(JSON.stringify.albumData)

// const DisplayAlbum = () => {
//     const { id } = useParams(); // Get album ID from URL
//     const { playWithId } = useContext(PlayerContext); // Use the player context to handle play
//     const [albumData, setAlbumData] = useState(null); // State to store album data
//     const [albumSongs, setAlbumSongs] = useState([]); // State to store songs
//     const [loading, setLoading] = useState(true); // Loading state

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // console.log('Fetching album with ID:', id);
//                 // Fetch album data by ID
//                 const album = await fetchAlbums(id); // Pass the `id` to the fetchAlbumById function
//                 setAlbumData(album); // Set album details

//                 // Fetch songs for the album by ID
//                 const songs = await getSongById(id); // Pass the `id` to fetch songs by album ID
//                 setAlbumSongs(songs); // Set album songs data
//             } catch (error) {
//                 console.error('Error fetching album or songs data:', error);
//             } finally {
//                 setLoading(false); // Stop loading after data is fetched
//             }
//         };

//         fetchData(); // Fetch album and songs when the component mounts or `id` changes
//     }, [id]); // Dependency array ensures fetchData runs when the `id` changes

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (!albumData) {
//         return (
//             <div>
//                 <Navbar />
//                 <h2>Album not found!</h2>
//             </div>
//         );
//     }

// //     return (
// //         <>
// //             <Navbar />
// //             <div>
// //             <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
// //                 <img src={album.image} alt={albumData.name} />
// //                 <div className="flex flex-col">
// //                     <p>Playlist</p>
// //                     <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
// //                     <p className="mt-1">
// //                         <img className="inline-block w-5" src={assets.spotify_logo} alt="" />
// //                         <b>Spotify</b>. 1,33,124 likes. <b>{albumSongs.length} songs,</b> about 2 hr 30 mins
// //                     </p>
// //                 </div>
// //             </div>
// //             <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
// //                 <p><b className="mr-4">#</b>Title</p>
// //                 <p>Album</p>
// //                 <p className="hidden sm:block">Date Added</p>
// //                 <img className="m-auto w-4" src={assets.clock_icon} alt="" />
// //             </div>
// //             <hr />
// //             {albumSongs.length === 0 ? (
// //                 <p>No songs found in this album</p>
// //             ) : (
// //                 albumSongs.map((item, index) => (
// //                     <div
// //                         key={item.id}
// //                         onClick={() => playWithId(item.id)}
// //                         className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
// //                     >
// //                         <p className="text-white">
// //                             <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
// //                             <img className="inline w-10 mr-5" src={item.image} alt={item.name} />
// //                             {item.name}
// //                         </p>
// //                         <p className="text-[15px]">{albumData.name}</p>
// //                         <p className="text-[15px] hidden sm:block">5 days ago</p>
// //                         <p className="text-[15px] text-center">{item.duration}</p>
// //                     </div>
// //                 ))
// //             )}
// // {/*
// // <h2>{albumData.name}</h2>
// //       <img src={albumData.image} alt={albumData.name} style={{ width: '200px' }} />
// //       <h3>Songs in this Album:</h3>
// //       {albumSongs.length === 0 ? (
// //         <p>No songs found in this album</p>
// //       ) : (
// //         <ul>
// //           {albumSongs.map((song) => (
// //             <li key={song.id}>
// //               🎵 {song.name} - {song.artist} ({song.duration})
// //             </li>
// //           ))}
// //         </ul>
// //       )} */}
// //     </div>
// //         </>
// //     );
// // };

// // export default DisplayAlbum;

// // import React, { useState, useEffect } from 'react';
// // import { fetchAlbums, getSongById } from "../services/Auth";

// // const DisplayAlbum = () => {
// //   const [albums, setAlbums] = useState([]); // State to store the list of albums and songs
// //   const [currentSong, setCurrentSong] = useState(null); // State to store the currently playing song

// //   // Fetch albums when the component mounts

// // //   console.log(JSON.stringify.getSongById)
// // // console.log(JSON.stringifyalbumsData)
// // // alert("songId:",songId)
// //   useEffect(() => {
// //     const getAlbums = async () => {
// //       const albumsData = await fetchAlbums();
// //       setAlbums(albumsData); // Set fetched albums data in state
// //     };

// //     getAlbums();
// //   }, []);

// //   // Fetch a particular song when clicked
// //   const playSong = async (songId) => {
// //     // alert("songId:",songId)
// //     const songData = await getSongById(songId); // Call the renamed function
// //     setCurrentSong(songData); // Set the selected song as the current song
// //   };

//   return (
//     <div>
//       <h1>Music Player</h1>

//       {/* Display the albums and their songs */}
//       <div>
//         {albums.map((album, index) => (
//           <div key={index}>
//             <h2>{album.album}</h2> {/* Display album name */}
//             <ul>
//               {album.songs.map((song) => (
//                 <li key={song.id}>
//                   <button onClick={() => playSong(song.id)}>
//                     {song.name} - {song.artist} {/* Display song name and artist */}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>

//       {/* Display the current song if one is selected */}
//       {currentSong && (
//         <div>
//           <h3>Now Playing: {currentSong.name}</h3> {/* Display currently playing song name */}
//           <audio controls>
//             <source src={currentSong.url} type="audio/mp3" /> {/* Assuming `url` field contains the song URL */}
//             Your browser does not support the audio element.
//           </audio>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DisplayAlbum;
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import { getSongById, getSongsByAlbum } from "../services/Auth";
import Navbar from "./Navbar";

const DisplayAlbum = () => {
  const { album } = useParams(); // Get album ID or name from the URL
   const { playWithId } = useContext(PlayerContext)||1 // Context for playing a song by ID
  const [albumSongs, setAlbumSongs] = useState([]); // State for storing fetched songs
  const [loading, setLoading] = useState(true); // State to handle loading

  // let myFun = ()=>{
  //   return <h1>Hello</h1>
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!album) {
          console.error("Album name or ID is missing");
          setLoading(false);
          return;
        }

        console.log("Fetching songs for album ID:", album);

        const songDetail = await getSongById();
        // alert("song fetched successfullyyyyyyyyyyyyyyy");
        songDetail(songs);

        // Fetch songs based on album ID or name
        // const songs = await getSongsByAlbum(album);
        // setAlbumSongs(songs);
        console.log("Fetched songs:", songs); // Log the fetched songs for debugging

        if (songs.length === 0) {
          console.error("No songs found for this album ID");
        }

        setAlbumSongs(songs); // Set the fetched songs in the state
      } catch (error) {
        console.error("Error fetching songs:", error);
      } finally {
        setLoading(false); // Stop loading state
      }
    };

    fetchData();
  }, [album]); // Run fetchData when the album ID or name changes

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <Navbar />
      <h2 className="text-3xl font-bold">{album}</h2>{" "}
      {/* Display album ID or name */}
      <h3 className="text-xl font-semibold mt-4">Songs List:</h3>
      {/* <pre>{JSON.stringify(albumSongs, null, 2)}</pre> Display albumSongs state */}
      {albumSongs.length > 0 ? (
        <ul className="mt-2 border rounded p-2">
          {albumSongs.map((song, index) => (
            <li
              key={song.id}
              className="flex justify-between p-2 border-b cursor-pointer hover:bg-gray-200"
              style={{ backgroundColor: "red" }}
              onClick={() => playWithId(song.id)}
            >
              <div>
                <h4 className="font-bold">{song.name}</h4>
                <p>{song.artist}</p>
                <p>{song.album}</p>
                <p>{song.desc}</p>
              </div>
              <img src={song.image} alt={song.name} className="w-12 h-12" />
              <button className="text-blue-500 hover:underline">▶ Play</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No songs available for this album.</p>
      )}
    </div>
  );
};

export default DisplayAlbum;
