import React from "react";
import { FaPlay } from "react-icons/fa";

function PlayButton() {
  return (
    <button className="flex justify-center items-center gap-2 bg-[#37C25E] rounded-xl p-2 hover:bg-zinc-600 transition-all">
      <p>پخش</p>
      <FaPlay />
    </button>
  );
}

export default PlayButton;
