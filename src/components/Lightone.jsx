// Lights.jsx
import React, { useState } from "react";

const Lightone = () => {
  const [isOn, setIsOn] = useState(false); // Track whether the light is ON or OFF

  const toggleLight = () => {
    setIsOn(!isOn); // Toggle the state between ON and OFF
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Light Indicator */}
      <div
        className={`w-32 h-32 rounded-full ${
          isOn ? "bg-red-500" : "bg-gray-300"
        }`}
      ></div>

      {/* Toggle Button */}
      <button
        className={`px-6 py-2 text-white rounded ${
          isOn ? "bg-red-600" : "bg-gray-600"
        }`}
        onClick={toggleLight}
      >
        {isOn ? "OFF" : "ON"}
      </button>
    </div>
  );
};

export default Lightone;
