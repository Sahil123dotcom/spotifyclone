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
    if (!audioRef.current) return; // 🔹 Prevent errors if audioRef is null

    const audio = audioRef.current; // Store ref in a variable

    const updateTime = () => {
      if (!audio) return; // Prevents errors if audio is null
      if (seekBar.current) {
        seekBar.current.style.width =
          Math.floor((audio.currentTime / audio.duration) * 100) + "%";
      }

      setTime({
        currentTime: {
          second: Math.floor(audio.currentTime % 60),
          minute: Math.floor(audio.currentTime / 60),
        },
        totalTime: {
          second: Math.floor(audio.duration % 60) || 0, // Prevent NaN
          minute: Math.floor(audio.duration / 60) || 0, // Prevent NaN
        },
      });
    };

    audio.ontimeupdate = updateTime; // ✅ Safe assignment

    return () => {
      if (audio) {
        audio.ontimeupdate = null; // ✅ Clean up safely
      }
    };
  }, [track]);

  // ✅ Load new track when `track` changes
  useEffect(() => {
    if (audioRef.current && track?.file) {
      audioRef.current.src = track.file;
      audioRef.current.load(); // ✅ Reloads the audio element
      play(); // ✅ Auto-play the new song
    }
  }, [track]);

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
  );
};

export default PlayerContextProvider;
