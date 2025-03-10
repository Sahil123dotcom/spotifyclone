import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../../public/assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import Player from "./Player";


console.log(albumsData)
const DisplayHome = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem key={index} {...item} />
          ))}
        </div>
      </div>
      <Player />
    </div>
  );
};

export default DisplayHome;
