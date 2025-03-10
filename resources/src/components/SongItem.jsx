// import React, { useContext } from "react";
// import { PlayerContext } from "../context/PlayerContext";

// const SongItem = ({ name, image, desc, id }) => {
//   const { playWithId } = useContext(PlayerContext) || 1;

//   // alert(playWithId)
//   // console.log(JSON.stringify(playWithId))
//   // console.log(playWithId,"playWithId")

//   return (
//     <div className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
//       <img className="rounded" src={image} alt="" />
//       <p className="font-bold mt-2 mb-1">{name}</p>
//       <p className="text-slate-200 text-sm">{desc}</p>
//     </div>
//   );
// };

// export default SongItem;


import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext) || { playWithId: () => {} };

  return (
    <div
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
      onClick={() => playWithId(id)}
    >
      <img className="rounded" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
