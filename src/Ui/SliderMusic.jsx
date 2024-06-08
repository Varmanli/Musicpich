import React, { useContext } from "react";

import PlayButton from "./PlayButton";
import { selectedSongContext } from "../App";

function SliderMusic({ image, title, name, id }) {
  const { setSongId } = useContext(selectedSongContext);
  return (
    <div className="flex flex-col md:h-[350px]  gap-4 justify-center items-center md:flex-row md:justify-around md:gap-20">
      <div>
        <img
          src={image}
          alt={title}
          className="w-[350px] md:w-[380px] rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-3 md:gap-7">
        <h3 className="text-[20px] md:text-[35px]">{title}</h3>
        <h4 className="text-[15px] md:text-[30px]">{name}</h4>
        <div className="flex justify-center items-center gap-3 ">
          <a onClick={() => setSongId(id)}>
            <PlayButton />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SliderMusic;
