import React from "react";

interface ClearButtonProps {
  onClearStorage: () => void;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClearStorage }) => {
  return (
    <button
      className="border-2 border-black m-2 p-2 rounded-lg bg-white hover:bg-red-500 hover:text-cyan-50"
      onClick={onClearStorage}
    >
      Clear
    </button>
  );
};

export default ClearButton;
