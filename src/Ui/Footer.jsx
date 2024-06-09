import React from "react";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex justify-center items-center gap-2 p-10 mt-10 border-t ">
      <a href="https://github.com/Varmanli" className="mb-1 text-[23px]">
        <FaSquareGithub />
      </a>
      <h1>Amirhosein Varmanli</h1>
    </div>
  );
}

export default Footer;
