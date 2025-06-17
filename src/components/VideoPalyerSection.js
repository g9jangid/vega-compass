/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const VideoPalyerSection = ({ title, ytcode, img }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="container mx-auto text-center mt-28 px-6 lg:px-28">
      <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3">
        <div className="w-full lg:w-1/2 text-left">
          <div className="inline-block rounded-xl overflow-hidden relative cursor-pointer" onClick={handleShow}>
            <svg
              width="73"
              height="72"
              viewBox="0 0 73 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <circle
                cx="36.5"
                cy="36"
                r="36"
                fill="#050505"
                fillOpacity="0.49"
              />
              <path
                d="M52 34.634C52.6667 35.0189 52.6667 35.9811 52 36.366L30.25 48.9234C29.5833 49.3083 28.75 48.8272 28.75 48.0574L28.75 22.9426C28.75 22.1728 29.5833 21.6917 30.25 22.0766L52 34.634Z"
                fill="white"
              />
            </svg>

            <img
              
              src={"/assets/images/" + img}
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
          <h3 className="ff-lato text-4xl text-blackone mt-4 mb-8 font-bold leading-tight">
            {title}
          </h3>

          <Link
            target="_blank"
            href={`https://www.youtube.com/watch?v=${ytcode}`}
            className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border bg-red py-2 px-8 text-white transition duration-300"
          >
            Watch Video
          </Link>
        </div>
      </div>
      {show && (
        <div className="fixed top-0 left-0 bottom-0 w-screen h-screen bg-black/80 z-[10000]">
          <div className="fixed top-[10vh] left-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-[80vw] max-w-[calc(80vh*16/9)] h-auto max-h-[88vh] aspect-w-16 aspect-h-9 aspect-video z-[10000] rounded-md lg:rounded-3xl overflow-hidden border-4 lg:border-8 border-white/50">
            <iframe
              style={{
                aspectRatio: "16/9",
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              src={`https://www.youtube.com/embed/${ytcode}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="p-0 m-0"
            ></iframe>
          </div>
          <span
            onClick={handleClose}
            className="inline-block cursor-pointer p-3 border-4 border-white absolute top-2 lg:top-4 right-2 lg:right-4 rounded-full hover:bg-white/20"
          >
            <IoCloseSharp color="#fff" size={28} />
          </span>
        </div>
      )}
    </section>
  );
};

export default VideoPalyerSection;
