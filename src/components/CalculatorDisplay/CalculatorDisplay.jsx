import React from "react";

const CalculatorDisplay = () => {
  return (
    <div
      id="display"
      className="bg-black text-white h-20 p-2 flex flex-col justify-between"
    >
      <p className="text-orange-300 text-xl">123456</p>
      <p className="text-right text-lg">0</p>
    </div>
  );
};

export default CalculatorDisplay;
