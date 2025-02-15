import React from "react";

export default function MenuContext() {
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        console.log("Right Click");
      }}
      className="p-5 border border-gray-300 rounded-md"
    >
      Right-click here (Custom Menu)
    </div>
  );
}
