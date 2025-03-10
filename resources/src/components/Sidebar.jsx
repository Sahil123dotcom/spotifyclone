import React, { useState } from "react";
import { assets } from "../../public/assets/assets"; // Import assets like icons
import { useNavigate } from "react-router-dom";
import { addSong } from "../services/Auth"; // Import API function to add song
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = () => {
  // const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false); // For toggling form visibility

  const [song, setSong] = useState({
    title: "",
    artist: "",
    album_id: "",
    image: "",
    audio_url: "",
  });

  const [message, setMessage] = useState(""); // To display success or error messages

  // Handle form input changes
  const handleChange = (e) => {
    console.log("Input Changed:", e.target.name, e.target.value);
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  // Function to check if the song exists on the internet
  const checkSongExistence = async (title, artist) => {
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(
          title + " " + artist
        )}&media=music&limit=1`
      );
      const data = await response.json();
      console.log(data, "data");
      return data.results.length > 0; // Returns true if a match is found
    } catch (error) {
      console.error("Error checking song existence:", error);
      return false; // Assume song doesn't exist if there's an error
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Reset message before submission

    // Check if all fields are filled
    if (
      !song.title ||
      !song.artist ||
      !song.album_id ||
      !song.image ||
      !song.audio_url
    ) {
      toast.warn("All fields are required!");
      return;
    }

    // Check if the song exists on the internet
    const songExists = await checkSongExistence(song.title, song.artist);
    if (!songExists) {
      setMessage("Song not found on the internet. Please check the details.");
      return;
    }

    // Call the API to add the song
    const result = await addSong(song);
    if (result) {
      toast.success("Song added successfully!");
      setSong({ title: "", artist: "", album_id: "", image: "", audio_url: "" }); // Reset form
      setShowForm(false); // Close the form after successful submission
    } else {
      setMessage("Failed to add song."); // Error message
    }
  };

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="Home" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* Your Library Section */}
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Library" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img
              className="w-5 cursor-pointer"
              src={assets.arrow_icon}
              alt="Arrow"
            />

            <img
              className="w-5 cursor-pointer"
              src={assets.plus_icon}
              alt="Add Song"
              onClick={() => setShowForm(true)}
            />
          </div>
        </div>
      </div>

      {/* Add Song Form (Popup Modal) */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl w-96 text-white shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Add a New Song
            </h2>
            {message && (
              <p
                className={`text-center mb-4 ${
                  message.includes("Failed") ? "text-red-400" : "text-green-400"
                }`}
              >
                {message}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="title"
                placeholder="Song title"
                value={song.title}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg text-black"
              />

              <input
                type="text"
                name="artist"
                placeholder="Song artist"
                value={song.artist}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg text-black"
              />
              <input
                type="text"
                name="album_id"
                placeholder="Album ID"
                value={song.album_id}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg text-black"
              />

              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={song.image}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg text-black"
              />
              <input
                type="text"
                name="audio_url"
                placeholder="Audio URL"
                value={song.audio_url}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg text-black"
              />

              <button
                type="submit"
                className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-gray-600"
              >
                Add Song
              </button>

              <button
                type="button"
                className="w-full py-3 mt-2 bg-purple-700 text-white rounded-lg hover:bg-gray-600"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
        <h1 className="">Create your playlist</h1>
        <p className="font-light">It's easy we will help you</p>
        <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
          Create Playlist
        </button>
      </div>
      <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
        <h1 className="">Let's findsome podcasts to follow</h1>
        <p className="font-light">we'll keep you update on new episodes</p>
        <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
          Browse podcasts
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
