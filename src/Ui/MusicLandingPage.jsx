import React, { useContext } from "react";
import PlayButton from "./PlayButton";
import { selectedSongContext } from "../App";
import DownlodButton from "./DownlodButton";

function MusicLandingPage({ image, title, id }) {
  const { setSongId } = useContext(selectedSongContext);
  return (
    <>
      <div className="flex flex-col justify-between items-center gap-5 m-4 border rounded-lg pb-4">
        <img src={image} alt={title} className="rounded-lg" />
        <div className="flex flex-col gap-5">
          <p className="font-semibold text-lg">{title}</p>
          <a onClick={() => setSongId(id)}>
            <PlayButton />
          </a>
          <a href="">
            <DownlodButton />
          </a>
        </div>
      </div>
    </>
  );
}

export default MusicLandingPage;
