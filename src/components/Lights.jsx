// components/Lights.jsx
import React, { useState, useEffect } from "react";

const Lights = () => {
  const [redLight, setRedLight] = useState(false);
  const [greenLight, setGreenLight] = useState(false);
  const [blueLight, setBlueLight] = useState(false);

  useEffect(() => {
    console.log("Lights status changed!");
  }, [redLight, greenLight, blueLight]);

  return (
    <div className="space-y-4">
      <button
        className={`w-20 h-20 rounded-full ${
          redLight ? "bg-red-500" : "bg-gray-300"
        }`}
        onClick={() => setRedLight(!redLight)}
      >
        Red
      </button>
      <button
        className={`w-20 h-20 rounded-full ${
          greenLight ? "bg-green-500" : "bg-gray-300"
        }`}
        onClick={() => setGreenLight(!greenLight)}
      >
        Green
      </button>
      <button
        className={`w-20 h-20 rounded-full ${
          blueLight ? "bg-blue-500" : "bg-gray-300"
        }`}
        onClick={() => setBlueLight(!blueLight)}
      >
        Blue
      </button>
    </div>
  );
};

export default Lights;
