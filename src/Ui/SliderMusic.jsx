import React, { useContext } from "react";

import PlayButton from "./PlayButton";
import { selectedSongContext } from "../App";
import DownlodButton from "./DownlodButton";

function SliderMusic({ image, title, name, id }) {
  const { setSongId } = useContext(selectedSongContext);
  return (
    <div className="flex flex-row md:h-[350px]  gap-4 items-center justify-start  md:gap-20">
      <div>
        <img
          src={image}
          alt={title}
          className="w-[130px] md:w-[280px] rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-between gap-3 md:gap-7">
        <h3 className="text-[14px] md:text-[30px]">{title}</h3>
        <div className="flex justify-center items-center gap-2 ">
          <a onClick={() => setSongId(id)}>
            <PlayButton />
          </a>
          <a href="">
            <DownlodButton />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SliderMusic;
