import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

function DownlodButton() {
  return (
    <button className="flex justify-center items-center gap-2 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-xs md:text-sm px-2 md:px-5 py-2.5 text-center me-2 mb-2">
      <p>دانلود آهنگ</p>
      <FaArrowCircleDown />
    </button>
  );
}

export default DownlodButton;
