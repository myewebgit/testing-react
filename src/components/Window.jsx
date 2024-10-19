// components/Window.jsx
import React, { useState, useEffect } from "react";

const Window = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen ? "Window opened" : "Window closed");
  }, [isOpen]);

  return (
    <div className="flex flex-col items-center">
      <button
        className={`px-4 py-2 mb-4 rounded ${
          isOpen ? "bg-green-600" : "bg-red-600"
        } text-white`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close Window" : "Open Window"}
      </button>

      <div
        className={`w-64 h-40 border-4 ${
          isOpen ? "border-green-600" : "border-red-600"
        } flex items-center justify-center`}
      >
        {isOpen ? "Window is Open" : "Window is Closed"}
      </div>
    </div>
  );
};

export default Window;
