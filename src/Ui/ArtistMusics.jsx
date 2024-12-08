import React, { useEffect, useState } from "react";
import MusicLandingPage from "../Ui/MusicLandingPage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { fetchMusic } from "../services/app";

const ArtistMusics = () => {
  const [dataMusic, setDataMusic] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // فچ کردن داده‌ها
  useEffect(() => {
    const fetchData = async () => {
      try {
        const musicData = await fetchMusic();
        setDataMusic(musicData);

        // استخراج هنرمندان از داده‌های موسیقی
        const uniqueArtists = [
          ...new Map(
            musicData.map((item) => [
              item.artist_id._id,
              { id: item.artist_id._id, name: item.artist_id.name },
            ])
          ).values(),
        ];
        setArtists(uniqueArtists);
      } catch (err) {
        setError("خطا در دریافت داده‌ها");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div id="target-section">
      {artists.map((artist) => (
        <ArtistSlider
          key={artist.id}
          name={artist.name}
          musicData={dataMusic.filter(
            (item) => item.artist_id._id === artist.id
          )}
        />
      ))}
    </div>
  );
};

// کامپوننت جداگانه برای اسلایدر هنرمندان
const ArtistSlider = ({ name, musicData }) => {
  return (
    <div>
      <h4 className="font-bold text-[14px] md:text-[20px] m-5">{name} :</h4>
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
        className="flex justify-around items-center"
      >
        {musicData.map((item) => (
          <SwiperSlide key={item._id}>
            <MusicLandingPage
              title={item.title}
              image={item.cover_url}
              artist={item.artist_id.name}
              music={item.music_url}
              id={item._id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ArtistMusics;
