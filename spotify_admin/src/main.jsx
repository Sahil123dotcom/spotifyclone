import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import "tailwindcss";


// import { BrowserRouter } from "react-router-dom"; // ✅ Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <BrowserRouter> ✅ Wrap the App inside BrowserRouter */}
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
  );
