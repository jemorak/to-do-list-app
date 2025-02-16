import React from "react";

type ClearButtonProps = {
  onClearStorage: () => void;
}

function ClearButton({ onClearStorage }: ClearButtonProps) {
    return (
    <button
      className="w-1/4 border-2 border-black m-2 p-2 rounded-lg bg-white hover:bg-red-500 hover:text-cyan-50"
      onClick={onClearStorage}
    >
      Clear
    </button>
  );
}


export default ClearButton;
