import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const [track, setTrack] = useState(songsData[0]); // Default to first song
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  // ✅ Play song safely
  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };

  // ✅ Pause song safely
  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  // ✅ Play a song by ID
  const playWithId = (id) => {
    if (id >= 0 && id < songsData.length) {
      setTrack(songsData[id]);
      setTimeout(() => {
        play(); // Ensure play happens after state update
      }, 100);
    }
  };

  // ✅ Play previous song
  const previous = () => {
    if (track.id > 0) {
      setTrack(songsData[track.id - 1]);
      setTimeout(() => play(), 100);
    }
  };

  // ✅ Play next song
  const next = () => {
    if (track.id < songsData.length - 1) {
      setTrack(songsData[track.id + 1]);
      setTimeout(() => play(), 100);
    }
  };

  // ✅ Seek song position
  const seekSong = (e) => {
    if (audioRef.current && seekBg.current) {
      const seekWidth = e.nativeEvent.offsetX / seekBg.current.offsetWidth;
      audioRef.current.currentTime = seekWidth * audioRef.current.duration;
    }
  };

  // ✅ Update time and seek bar
  useEffect(() => {
    if (!audioRef.current) return;

    const updateTime = () => {
      if (!audioRef.current) return;
      seekBar.current.style.width =
        Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%";

      setTime({
        currentTime: {
          second: Math.floor(audioRef.current.currentTime % 60),
          minute: Math.floor(audioRef.current.currentTime / 60),
        },
        totalTime: {
          second: Math.floor(audioRef.current.duration % 60),
          minute: Math.floor(audioRef.current.duration / 60),
        },
      });
    };

    audioRef.current.ontimeupdate = updateTime;

    return () => {
      audioRef.current.ontimeupdate = null;
    };
  }, [track]); // Update when track changes

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  )
};

export default PlayerContextProvider;
