import React, { useContext, useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { RiForward15Line, RiReplay15Fill } from "react-icons/ri";

import { dataMusic } from "../data";
import { selectedSongContext } from "../App";

function MusicPlayer() {
  const { songId, setSongId } = useContext(selectedSongContext);
  const [activeSong, setActiveSong] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [songTime, setSongTime] = useState({ duration: 0, currentTime: 0 });
  const audioRef = useRef();

  function timeUpdateHandler(e) {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongTime({ ...songTime, duration, currentTime });
  }
  function dragHandler(e) {
    audioRef.current.currentTime = e.target.value;
    setSongTime({ ...songTime, currentTime: e.target.value });
  }
  function forwardHandler() {
    audioRef.current.currentTime += 15.0;
  }
  function replayHandler() {
    audioRef.current.currentTime -= 15.0;
  }
  useEffect(
    function () {
      if (songId) {
        setIsPlaying(true), audioRef.current.play();
      }
    },
    [activeSong]
  );
  function playSong() {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  }
  function timeFormat(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
  useEffect(() => {
    if (songId) {
      fetch(`https://musicpich.liara.run/api/music/${songId}`)
        .then((res) => res.json())
        .then((data) => {
          setActiveSong(data);
          setIsPlaying(true);
          if (audioRef.current) {
            audioRef.current.src = data.music_url;
            audioRef.current.play();
          }
        })
        .catch((err) => console.error("خطا در دریافت موسیقی:", err));
    }
  }, [songId]);
  function closeHandler() {
    setSongId("");
  }
  return (
    <>
      {songId && (
        <div className=" fixed bottom-0 right-0 left-0 z-10 bg-[#000] border-t border-green-600 ">
          <div className="flex mt-2 md:mt-0 flex-row-reverse justify-center  gap-5 w-[100%]  items-center h-[70px]">
            <div className="flex flex-row-reverse  justify-between  items-center gap-5 text-lg ">
              <div className="flex gap-5 ">
                <button onClick={replayHandler}>
                  <RiForward15Line />
                </button>
                <button onClick={playSong}>
                  <FaPlay className={isPlaying && "hidden"} />
                  <FaPause className={!isPlaying && "hidden"} />
                </button>
                <button onClick={forwardHandler}>
                  <RiReplay15Fill />
                </button>
                <MdClose
                  onClick={closeHandler}
                  className=" cursor-pointer text-xl"
                />
              </div>
            </div>
            <div>
              <audio
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef}
                src={activeSong.music_url}
                onLoadedMetadata={timeUpdateHandler}
                loop={true}
              ></audio>
            </div>
            <div className="m-1 flex gap-2 justify-center items-center">
              <p className="hidden md:flex">
                {timeFormat(songTime.currentTime)}
              </p>
              <input
                type="range"
                className="lg:w-[650px] md:static fixed bottom-[75px] left-0 right-0 w-full outline-none bg-black  overflow-hidden "
                min={0}
                max={songTime.duration}
                value={songTime.currentTime}
                onChange={dragHandler}
              />

              <p className="hidden md:flex">{timeFormat(songTime.duration)}</p>
            </div>
            <div className="flex flex-row-reverse items-center font-shabnam ">
              <div className="felx felx-col gap-5 ">
                <p className=" font-semibold">{activeSong.title}</p>
                <p className="">{activeSong?.artist_id?.name}</p>
              </div>
              <img
                src={activeSong.cover_url}
                alt={activeSong.title}
                className="w-[50px]  mb-2 mx-2"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MusicPlayer;
