import React, { useContext } from "react";
import { FaRandom } from "react-icons/fa";
import logo from "../images/Logo.png";
import { selectedSongContext } from "../App";
function Header() {
  const { setSongId } = useContext(selectedSongContext);
  function randomSongHandler() {
    setSongId(+Math.floor(Math.random() * 26));
  }
  return (
    <div className="flex justify-between items-center p-5  font-semibold">
      <div className="w-[150px] lg:w-[270px] cursor-pointer">
        <img src={logo} alt="logo" />
      </div>
      <button
        className="flex justify-center items-center gap-2 bg-[#37C25E] rounded-xl p-2 ml-10 md:ml-20 hover:bg-zinc-600 transition-all"
        onClick={randomSongHandler}
      >
        <p className="hidden md:block">پخش تصادفی موسیقی</p>
        <FaRandom />
      </button>
    </div>
  );
}

export default Header;
