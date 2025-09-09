import React from "react";

function animatedButton({label}) {
  return (
    <button className="px-6 py-2 bg-gradient-to-r from-[#2abfff] to-[#0071FF] hover:bg-gradient-to-r hover:from-[#ffee00] hover:to-[#ffb300] hover:text-black rounded-lg font-semibold transition duration-200 hover:scale-110">{label}</button>
  );
}

export default animatedButton;
