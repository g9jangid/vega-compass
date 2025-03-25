/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const logos = [
  {
    icon: "/assets/images/brands/10.png",
    text: "End to end sales process optimization with MS Dynamics CRM",
  },
  {
    icon: "/assets/images/brands/8.png",
    text: "Optimize data and CRM technical setup challenges in Salesforce",
  },
  {
    icon: "/assets/images/brands/14.png",
    text: "CRM transformation and migration from Salesforce to MS Dynamics CRM",
  },
  {
    icon: "/assets/images/brands/13.png",
    text: "Marketing operations streamline for logistics operations with Salesforce",
  },
  {
    icon: "/assets/images/brands/3.png",
    text: "Optimize and integrate sales operations with Salesforce & Mulesoft",
  },
  {
    icon: "/assets/images/brands/11.png",
    text: "Automate end to end customer support with Salesforce",
  },
  {
    icon: "/assets/images/brands/15.png",
    text: "Support and manage customer service with Salesforce",
  },
  {
    icon: "/assets/images/brands/17.png",
    text: "Greenfield setup of CRM operations for public services management",
  },
  {
    icon: "/assets/images/brands/9.png",
    text: "Automate end to end process for company setup and compliances management",
  },
  {
    icon: "/assets/images/brands/16.png",
    text: "Transform CRM operations and migrate from On-Premise Siebel to Salesforce",
  },
  {
    icon: "/assets/images/brands/12.png",
    text: "End to end loan and credit operations automation with MS Dynamics CRM",
  },
];

const LogoSlider = () => {
  const [windowWidth, setWindowWidth] = useState(1025);

  useEffect(() => {
    setWindowWidth(window?.innerWidth);
  }, []);
  return (
    <div className="logo-slider">
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        loop={true}
        freeMode={windowWidth >= 1024 ? false : true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        navigation
        modules={[Navigation, Autoplay, FreeMode]}
        className="!px-16"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <div className="p-6 bg-[#FFEEE0] text-left h-full w-48 lg:w-72 rounded-xl">
              <img src={logo.icon} alt={`Logo ${index + 1}`} />
              <p className="ff-lato text-blackone mt-4">{logo.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
