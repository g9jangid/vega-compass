/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  return (
    <div className="testimonial-slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <div className="w-full pt-10 lg:pt-14 lg:px-24 pb-36 bg-[--off-red2] flex flex-col lg:flex-row items-center">
            <div className="flex-1 text-center lg:text-left px-6 lg:px-16 lg:pr-16">
              <p className="text-lg lg:text-2xl text-blackone ff-lato mt-6 lg:mt-2 text-center lg:text-left">
                “VegaCompass helped us streamline our CRM implementation. Their
                consulting team went above and beyond to tailor the solution to
                our needs. Now, we can manage client interactions with ease and
                focus on growth!”
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <div className="pr-16">
                  <p className="ff-lato text-3xl text-blackone font-semibold">
                    40%
                  </p>
                  <p className="ff-lato text-base text-blackone">
                    Efficiency Boost
                  </p>
                </div>
                <div>
                  <p className="ff-lato text-3xl text-blackone font-semibold">
                    40%
                  </p>
                  <p className="ff-lato text-base text-blackone">
                    Efficiency Boost
                  </p>
                </div>
              </div>
            </div>
            <div className="w-80 text-left mt-12 lg:mt-0">
              <img src="/assets/images/testimonial/client1.png" alt="" />
              <p className=" ff-raleway text-xl text-blackone font-semibold mt-2 mb-1">
                John Doe
              </p>
              <p className=" ff-lato text-sm font-medium text-[--text-gray] uppercase">
                CEO, Tech Solutions
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full pt-10 lg:pt-14 lg:px-24 pb-36 bg-[--off-red2] flex flex-col lg:flex-row items-center">
            <div className="flex-1 text-center lg:text-left px-6 lg:px-16 lg:pr-16">
              <p className="text-lg lg:text-2xl text-blackone ff-lato mt-6 lg:mt-2 text-center lg:text-left">
                “VegaCompass helped us streamline our CRM implementation. Their
                consulting team went above and beyond to tailor the solution to
                our needs. Now, we can manage client interactions with ease and
                focus on growth!”
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <div className="pr-16">
                  <p className="ff-lato text-3xl text-blackone font-semibold">
                    40%
                  </p>
                  <p className="ff-lato text-base text-blackone">
                    Efficiency Boost
                  </p>
                </div>
                <div>
                  <p className="ff-lato text-3xl text-blackone font-semibold">
                    40%
                  </p>
                  <p className="ff-lato text-base text-blackone">
                    Efficiency Boost
                  </p>
                </div>
              </div>
            </div>
            <div className="w-80 text-left mt-12 lg:mt-0">
              <img src="/assets/images/testimonial/client1.png" alt="" />
              <p className=" ff-raleway text-xl text-blackone font-semibold mt-2 mb-1">
                John Doe
              </p>
              <p className=" ff-lato text-sm font-medium text-[--text-gray] uppercase">
                CEO, Tech Solutions
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
