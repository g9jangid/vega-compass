/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const logos = [
  "/assets/images/brands/logo1.svg",
  "/assets/images/brands/logo2.svg",
  "/assets/images/brands/logo3.svg",
  "/assets/images/brands/logo4.svg",
  "/assets/images/brands/logo5.svg",
  "/assets/images/brands/logo1.svg",
  "/assets/images/brands/logo2.svg",
  "/assets/images/brands/logo3.svg",
  "/assets/images/brands/logo4.svg",
  "/assets/images/brands/logo5.svg",
];

const LogoSlider = () => {
  const [windowWidth, setWindowWidth] = useState(1025);

  useEffect(() => {
    setWindowWidth(window?.innerWidth);
  }, []);
  return (
    <div className="logo-slider">
      <Swiper
        spaceBetween={windowWidth >= 1024 ? 100 : 30}
        slidesPerView={"auto"}
        loop={true}
        freeMode={windowWidth >= 1024 ? false : true}
        autoplay={
          windowWidth >= 1024
            ? false
            : {
                delay: 0,
                disableOnInteraction: false,
              }
        }
        speed={1000}
        navigation
        modules={[Navigation, Autoplay, FreeMode]}
        className="!px-16"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
