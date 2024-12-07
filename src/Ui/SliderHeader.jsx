import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SliderMusic from "./SliderMusic";
import "swiper/css";
import { newMusic } from "../data";
import img from "../images/hero-img.png";
import Header from "./Header";

function SliderHeader() {
  return (
    <>
      {/* <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        {newMusic.map((i) => (
          <SwiperSlide key={i.id}>
            <SliderMusic
              image={i.image}
              title={`${i.title} با صدای   ${i.artist} `}
              name={i.title}
              music={i.music}
              id={i.id}
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <div className="relative  bg-custom-pattern bg-cover bg-center bg-no-repeat h-[100vh] w-full">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <Header />
          <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="font-bold text-xl lg:text-3xl  text-center font-shabnam">
              جایی که موسیقی زنده می‌شود! <br /> با ما، صدای رویاهایت را کشف کن
            </h1>
            <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-semibold shadow-2xl shadow-green-600 rounded-lg text-xs md:text-sm px-2   md:px-5 py-2.5 text-center me-2 mb-2">
              شروع گوش دادن
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderHeader;
