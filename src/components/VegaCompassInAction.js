/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

const VegaCompassInAction = () => {
  return (
    <section className="container mx-auto text-center mt-28 px-6 lg:px-28">
      <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3">
        <div className="w-full lg:w-1/2 text-left">
          <div className="inline-block rounded-xl">
            <Link
              href={"https://www.youtube.com/watch?v=9zaL6uPWO9U"}
              className="w-full h-full"
              target="_blank"
            >
              <img
                src="/assets/images/videopreview.png"
                alt=""
                className="w-full h-full object-cover cursor-pointer"
              />
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
          <h3 className="ff-raleway text-5xl text-blackone mt-4 mb-4 font-bold leading-tight">
            See <span className="text-red">Vega Compass </span>
            in action
          </h3>
          <p className="ff-lato text-base text-blackone mt-4 mb-6">
            Watch our journey of delivering impactful CRM solutions that empower
            businesses worldwide
          </p>
          <Link
            href="/contact-us"
            className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border bg-red py-2 px-8 text-white transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VegaCompassInAction;
