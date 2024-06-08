import React from "react";
import { FaHeart } from "react-icons/fa";

function AddToListButton() {
  return (
    <button className="flex justify-center items-center gap-2 bg-[#37C25E] rounded-xl p-3 ">
      {/* <p>مورد علاقه</p> */}
      <FaHeart/>
    </button>
  );
}

export default AddToListButton;
