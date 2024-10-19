// App.jsx
import React, { useState } from "react";
import Lights from "./components/Lights";
import Window from "./components/Window";
import RedLight from "./components/RedLight";
import Lightone from "./components/Lightone";
// import Light from "./components/Light";

function App() {
  const [currentPage, setCurrentPage] = useState("lights");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 text-white rounded ${
            currentPage === "lights" ? "bg-blue-600" : "bg-blue-400"
          }`}
          onClick={() => setCurrentPage("lights")}
        >
          Lights
        </button>
        <button
          className={`px-4 py-2 text-white rounded ${
            currentPage === "window" ? "bg-blue-600" : "bg-blue-400"
          }`}
          onClick={() => setCurrentPage("window")}
        >
          Window
        </button>
      </div>
      
      {currentPage === "lights" ? <Lights /> : <Window />}
      <RedLight></RedLight>
      {/* <Light></Light> */}
      <Lightone></Lightone>
    </div>

    
  );
}

export default App;

