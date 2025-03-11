import React from "react";
import Routes from "./routes/Index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"



const App = () => {
  return (
    <div className="flex items-start min-h-screen">
      <ToastContainer />
      <Navbar/>
          <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
      <Sidebar/>
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
          <Routes />
        </div>
      </div>
    </div>
  );
};

export default App;
