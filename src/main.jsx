import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Buttons from "./components/Buttons.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div className="bg-gray-900  flex justify-center">
      <nav className="flex items-center justify-center">
       
        <h1 className="text-2xl font-bold text-white">POKEDEX</h1>
      </nav>
    </div>

    
   <Buttons/>
  </>
);
