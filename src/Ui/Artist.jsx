import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { fetchArtists } from "../services/app";

function Artist() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // فچ کردن داده‌ها با استفاده از fetchArtists
  useEffect(() => {
    const getArtists = async () => {
      try {
        const data = await fetchArtists(); // استفاده از تابع fetchArtists
        setArtists(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getArtists();
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>خطا: {error}</p>;

  return (
    <div>
      <h4 className="font-bold text-[14px] md:text-[20px] m-5">هنرمندان :</h4>
      <Swiper
        breakpoints={{
          10: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={5}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="flex justify-around items-center"
      >
        {artists.map((artist) => (
          <SwiperSlide key={artist.id}>
            <div className="cursor-pointer">
              <img
                src={artist.image_url}
                alt={artist.name}
                className="md:w-[180px] w-[130px] rounded-xl"
              />
              <p className="py-5">{artist.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Artist;
