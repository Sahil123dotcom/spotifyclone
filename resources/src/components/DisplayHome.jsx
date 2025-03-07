import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../../public/assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../../public/assets/assets";
import SongItem from "./SongItem";
import Player from "./Player";
// alert(JSON.stringify(albumsData))
//  alert(JSON.stringify(AlbumItem))

const DisplayHome = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <Player />
    </div>
  );
};

export default DisplayHome;
