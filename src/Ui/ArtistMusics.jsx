import React from "react";
import { dataMusic } from "../data";
import MusicLandingPage from "../Ui/MusicLandingPage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

function ArtistMusics() {
  return (
    <>
      <div>
        <h4 className="font-bold text-[14px] md:text-[20px] m-5">
          علیرضا قربانی :
        </h4>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            10: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={2}
          freeMode={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="flex justify-around items-center "
        >
          {dataMusic.map(
            (item) =>
              +item.artistId === 1 && (
                <SwiperSlide key={item.id}>
                  <MusicLandingPage
                    title={item.title}
                    image={item.image}
                    artist={item.artist}
                    music={item.music}
                    id={item.id}
                  />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
      <div>
        <h4 className="font-bold text-[14px] md:text-[20px] m-5">
          همایون شجریان :
        </h4>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            10: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={2}
          freeMode={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="flex justify-around items-center "
        >
          {dataMusic.map(
            (item) =>
              +item.artistId === 2 && (
                <SwiperSlide key={item.id}>
                  <MusicLandingPage
                    title={item.title}
                    image={item.image}
                    artist={item.artist}
                    music={item.music}
                    id={item.id}
                  />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
      <div>
        <h4 className="font-bold text-[14px] md:text-[20px] m-5">
          محسن چاوشی :
        </h4>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            10: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={2}
          freeMode={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="flex justify-around items-center "
        >
          {dataMusic.map(
            (item) =>
              +item.artistId === 3 && (
                <SwiperSlide key={item.id}>
                  <MusicLandingPage
                    title={item.title}
                    image={item.image}
                    artist={item.artist}
                    music={item.music}
                    id={item.id}
                  />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
      <div>
        <h4 className="font-bold text-[14px] md:text-[20px] m-5">
          علی یاسینی :
        </h4>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            10: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={2}
          freeMode={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="flex justify-around items-center "
        >
          {dataMusic.map(
            (item) =>
              +item.artistId === 4 && (
                <SwiperSlide key={item.id}>
                  <MusicLandingPage
                    title={item.title}
                    image={item.image}
                    artist={item.artist}
                    music={item.music}
                    id={item.id}
                  />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
      <div>
        <h4 className="font-bold text-[14px] md:text-[20px] m-5">
          عرفان طهماسبی :
        </h4>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            10: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={2}
          freeMode={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="flex justify-around items-center "
        >
          {dataMusic.map(
            (item) =>
              +item.artistId === 5 && (
                <SwiperSlide key={item.id}>
                  <MusicLandingPage
                    title={item.title}
                    image={item.image}
                    artist={item.artist}
                    music={item.music}
                    id={item.id}
                  />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </>
  );
}

export default ArtistMusics;
