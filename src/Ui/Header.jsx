import React, { useContext } from "react";
import { FaRandom } from "react-icons/fa";
import logo from "/images/Logo.png";
function Header() {
  return (
    <div className="flex md:justify-between justify-center lg:justify-between items-center p-5  font-semibold">
      <div className="cursor-pointer mb-2">
        <img src={logo} alt="logo" />
      </div>
      <button className="md:flex justify-center hidden  items-center gap-2  text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm md:text-sm px-2  md:px-5 py-2.5 text-center me-2 mb-2 font-shabnam">
        <p>لذت شنیدن موسیقی</p>
        <FaRandom />
      </button>
    </div>
  );
}

export default Header;
