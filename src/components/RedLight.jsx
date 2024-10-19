// RedLight.jsx
import React, { useState, useEffect } from 'react';

const RedLight = () => {
  const [isLightOn, setIsLightOn] = useState(false); // Default: Light is OFF

  // Logs state change whenever the light is toggled
  useEffect(() => {
    (isLightOn ? "Red light is ON" : "Red light is OFF");
  }, [isLightOn]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Light Indicator */}
      <div
        className={`w-40 h-40 rounded-full mb-6 transition-all duration-500 ${
          isLightOn ? "bg-red-500 hover:bg-red-700" : "bg-gray-300"
        }`}
      />

      {/* Toggle Button */}
      <button
        className={`px-6 py-3 text-white text-lg rounded-lg ${
          isLightOn ? "bg-red-600 hover:bg-red-700" : "bg-gray-500 hover:bg-gray-600"
        }`}
        onClick={() => setIsLightOn(!isLightOn)}
      >
        {isLightOn ? "OFF" : "ON"}
      </button>
    </div>
  );
};

export default RedLight;
