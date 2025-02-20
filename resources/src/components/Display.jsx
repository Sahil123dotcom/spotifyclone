import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { albumsData } from "../assets/assets";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import Sidebar from "./Sidebar";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  // alert("displayyy")
  // Extract album ID correctly from URL (for example, /album/1 or /album/10)
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : ""; // Get the album ID dynamically

  // Default to white if albumId is not found
  const bgColor = albumsData[albumId] ? albumsData[albumId].bgColor : "#ffffff";

  useEffect(() => {
    if (isAlbum && albumId) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  }, [albumId, bgColor]);

  return (
    
    <>
    <div
    ref={displayRef}
    className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w[75%] lg:ml-0"
  >
  </div>
  <DisplayHome/>


  </>
  );
};

export default Display;
