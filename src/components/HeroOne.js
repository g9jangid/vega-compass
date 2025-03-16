/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

const HeroOne = ({ subhead, title, img, bg }) => {
  return (
    <section
      className={`w-full mt-[115px] min-h-[500px] flex items-center`}
      style={{ backgroundColor: bg }}
    >
      <div className="container mx-auto flex py-6 px-6 items-center lg:flex-row flex-col">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {!!subhead ? (
            <div className="mb-2 text-center lg:text-left">
              <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
                {subhead}
              </p>
              <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2 inline-block relative top-[-7px]"></div>
            </div>
          ) : (
            ""
          )}

          <h1 className="ff-raleway font-semibold text-3xl lg:text-4xl xl:text-5xl text-blackone leading-tight lg:leading-tight xl:leading-tight text-center lg:text-left pt-10 lg:pt-0">
            {title}
          </h1>
          <Link
            href="/signup"
            className="text-base mt-5 capitalize inline-block ff-lato ease-in-up rounded-md border bg-red py-2 px-8 text-white transition duration-300"
          >
            Request a Demo
          </Link>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-11 flex justify-center mt-5 lg:mt-0">
          <img
            src={img}
            alt=""
            className="w-3/4 lg:w-full h-full object-cover p-2 lg:p-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
