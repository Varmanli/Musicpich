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
    console.log(e.target.currentTime);
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
  useEffect(
    function () {
      dataMusic.map(
        (i) =>
          +i.id === +songId &&
          setActiveSong({
            title: i.title,
            image: i.image,
            music: i.music,
            artist: i.artist,
            id: i.id,
          })
      );
    },
    [songId]
  );
  function closeHandler() {
    setSongId("");
  }

  return (
    <>
      {songId && (
        <div className=" fixed bottom-0 right-0 left-0 z-10 bg-gradient-to-r from-slate-500 to-slate-800 border m-1 rounded-lg ">
          <div className="m-1 flex gap-2 justify-center items-center">
            <p>{timeFormat(songTime.currentTime)}</p>
            <input
              type="range"
              className="w-[100%]"
              min={0}
              max={songTime.duration}
              value={songTime.currentTime}
              onChange={dragHandler}
            />
            <p>{timeFormat(songTime.duration)}</p>
          </div>
          <div className="flex flex-row-reverse justify-center md:gap-[370px] gap-5  items-center h-[70px]">
            <div className="flex flex-row-reverse items-center md:gap-10">
              <img
                src={activeSong.image}
                alt={activeSong.title}
                className="w-[70px] rounded-full mb-2 mx-2"
              />
              <div className="felx felx-col gap-5 hidden md:block">
                <p className="md:text-[20px] font-bold">{activeSong.title}</p>
                <p className="md:text-[17px] ">{activeSong.artist}</p>
              </div>
            </div>
            <div className="flex flex-row-reverse  justify-between  items-center gap-5 text-[30px] ">
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
              </div>
            </div>
            <div>
              <div className=" m-2 font-bold py-2.5 px-5 me-2 mb-2 text-sm  text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <button
                  onClick={closeHandler}
                  className="flex justify-center items-center gap-2"
                >
                  <p>بستن</p> <MdClose />
                </button>
              </div>
              <audio
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef}
                src={activeSong.music}
                onLoadedMetadata={timeUpdateHandler}
                loop={true}
              ></audio>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MusicPlayer;
