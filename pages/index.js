import HomePage from "../components/homePage";
import AboutUs from "../components/aboutUs";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <Swiper
      modules={[EffectFade, Mousewheel, Pagination, Navigation]} 
      effect="fade"
      direction="vertical"
      mousewheel={true}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      className="max-w-7xl m-auto"
    >
      <SwiperSlide>
        <HomePage />
      </SwiperSlide>
      <SwiperSlide>
        <AboutUs />
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  )
}
