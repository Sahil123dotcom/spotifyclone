import React from "react";
import Routes from "./routes/Index";
import { ToastContainer } from 'react-toastify';
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
      <div>
           <ToastContainer />
      <Routes />
    </div>
  );
};

export default App;
