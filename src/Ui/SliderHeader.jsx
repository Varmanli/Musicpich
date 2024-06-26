import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SliderMusic from "./SliderMusic";
import "swiper/css";
import { newMusic } from "../data";

function SliderHeader() {
  return (
    <>
      <Swiper
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
      </Swiper>
    </>
  );
}

export default SliderHeader;
