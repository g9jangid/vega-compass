/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

const HomeSlider = () => {
  return (
    <>
      <Carousel
        className="home-slider"
        autoPlay={false}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        swipeable={false}
      >
        <div className="red-gradient home-slide text-center flex justify-center">
          <div className="container flex justify-between flex-col lg:flex-row items-center lg:items-start h-full">
            <div className="w-full relative z-[1] mt-12 lg:mt-28 px-4 lg:px-20 flex flex-col">
              <h1 className="text-white ff-raleway text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-semibold !leading-tight">
                Business optimization <br className="hidden lg:block" /> through
                CRM domain <br className="hidden lg:block" />& Tech knowledge
              </h1>
              <div className=" text-center lg:text-left mt-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center ff-lato ease-in-up rounded-md text-base font-semibold bg-white py-3 px-8 text-blackone md:px-9 lg:px-6 xl:px-9"
                >
                  <span className="pr-3">Read Case Study</span>
                  <svg
                    width="32"
                    height="15"
                    viewBox="0 0 32 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5C0 8.05228 0.447715 8.5 1 8.5V6.5ZM31.7071 8.20711C32.0976 7.81658 32.0976 7.18342 31.7071 6.79289L25.3431 0.428932C24.9526 0.0384079 24.3195 0.0384079 23.9289 0.428932C23.5384 0.819456 23.5384 1.45262 23.9289 1.84315L29.5858 7.5L23.9289 13.1569C23.5384 13.5474 23.5384 14.1805 23.9289 14.5711C24.3195 14.9616 24.9526 14.9616 25.3431 14.5711L31.7071 8.20711ZM1 8.5H31V6.5H1V8.5Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="home-slider-img relative bottom-0 z-[2] lg:absolute right-0 w-full md:w-3/4 p-6 lg:w-1/2">
              <img
                src="/assets/images/slider/business-optimisation.png"
                className="object-center lg:object-right"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="red-gradient home-slide text-center flex justify-center">
          <div className="container flex justify-between flex-col lg:flex-row items-center lg:items-start">
            <div className="w-full relative z-[1] mt-12 lg:mt-28 px-4 lg:px-20 flex flex-col">
              <h1 className="text-white ff-raleway text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-semibold !leading-tight">
                Transform your customer <br className="hidden lg:block" />{" "}
                journey with CRM <br className="hidden lg:block" /> experts
              </h1>
              <div className=" text-center lg:text-left mt-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center ff-lato ease-in-up rounded-md text-base font-semibold bg-white py-3 px-8 text-blackone md:px-9 lg:px-6 xl:px-9"
                >
                  <span className="pr-3">Read Case Study</span>
                  <svg
                    width="32"
                    height="15"
                    viewBox="0 0 32 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5C0 8.05228 0.447715 8.5 1 8.5V6.5ZM31.7071 8.20711C32.0976 7.81658 32.0976 7.18342 31.7071 6.79289L25.3431 0.428932C24.9526 0.0384079 24.3195 0.0384079 23.9289 0.428932C23.5384 0.819456 23.5384 1.45262 23.9289 1.84315L29.5858 7.5L23.9289 13.1569C23.5384 13.5474 23.5384 14.1805 23.9289 14.5711C24.3195 14.9616 24.9526 14.9616 25.3431 14.5711L31.7071 8.20711ZM1 8.5H31V6.5H1V8.5Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="home-slider-img relative bottom-0 z-[2] lg:absolute right-0 w-full md:w-3/4 p-6 lg:w-1/2">
              <img
                src="/assets/images/slider/customer-journey.svg"
                className="object-center lg:object-right"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="red-gradient home-slide text-center flex justify-center">
          <div className="container flex justify-between flex-col lg:flex-row items-center lg:items-start">
            <div className="w-full relative z-[1] mt-12 lg:mt-28 px-4 lg:px-20 flex flex-col">
              <h1 className="text-white ff-raleway text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-semibold !leading-tight">
                Think CRM. <br className="hidden lg:block" />
                Think Vega Compass
              </h1>
              <div className=" text-center lg:text-left mt-8">
                <Link
                  href="/signup"
                  className="inline-flex items-center ff-lato ease-in-up rounded-md text-base font-semibold bg-white py-3 px-8 text-blackone md:px-9 lg:px-6 xl:px-9"
                >
                  <span className="pr-3">Read Case Study</span>
                  <svg
                    width="32"
                    height="15"
                    viewBox="0 0 32 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5C0 8.05228 0.447715 8.5 1 8.5V6.5ZM31.7071 8.20711C32.0976 7.81658 32.0976 7.18342 31.7071 6.79289L25.3431 0.428932C24.9526 0.0384079 24.3195 0.0384079 23.9289 0.428932C23.5384 0.819456 23.5384 1.45262 23.9289 1.84315L29.5858 7.5L23.9289 13.1569C23.5384 13.5474 23.5384 14.1805 23.9289 14.5711C24.3195 14.9616 24.9526 14.9616 25.3431 14.5711L31.7071 8.20711ZM1 8.5H31V6.5H1V8.5Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="home-slider-img relative bottom-0 z-[2] lg:absolute right-0 w-full md:w-3/4 p-6 lg:w-2/5">
              <img
                src="/assets/images/slider/think-crm.png"
                className="object-center lg:object-right pt-6"
                alt=""
              />
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default HomeSlider;
