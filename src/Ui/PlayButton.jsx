import React from "react";
import { FaPlay } from "react-icons/fa";

function PlayButton() {
  return (
    <button className="flex justify-center items-center gap-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-xs md:text-sm px-2   md:px-5 py-2.5 text-center me-2 mb-2">
      <p>پخش</p>
      <FaPlay />
    </button>
  );
}

export default PlayButton;
