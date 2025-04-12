/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

const HeroOne = ({ subhead, title, img, bg, youtubelinks, page = "" }) => {
  const YoutubeLinks = () => (
    <div className="flex text-center justify-center lg:justify-start mb-8 flex-col md:flex-row w-full md:w-auto ">
      <Link
        href={"https://www.youtube.com/watch?v=mPZgbljL7TE"}
        target="_blank"
        className="text-blackone border-blackone ff-lato text-sm border rounded-3xl inline-flex justify-center items-center py-1.5 px-5"
      >
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6239 2.63935C17.4169 1.85987 16.8069 1.24601 16.0325 1.03764C14.6288 0.659073 9 0.659073 9 0.659073C9 0.659073 3.37124 0.659073 1.96752 1.03764C1.19306 1.24597 0.583137 1.85987 0.376137 2.63935C0 4.05221 0 6.99999 0 6.99999C0 6.99999 0 9.94778 0.376137 11.3606C0.583137 12.1401 1.19306 12.754 1.96752 12.9624C3.37124 13.3409 9 13.3409 9 13.3409C9 13.3409 14.6288 13.3409 16.0325 12.9624C16.8069 12.754 17.4169 12.1401 17.6239 11.3606C18 9.94778 18 6.99999 18 6.99999C18 6.99999 18 4.05221 17.6239 2.63935Z"
            fill="#FF0000"
          />
          <path
            d="M7.15918 9.67637L11.8637 7.00007L7.15918 4.32362V9.67637Z"
            fill="white"
          />
        </svg>
        <span className="pl-2">Watch our AI agent Salesman</span>
      </Link>
      <Link
        href={"https://www.youtube.com/watch?v=ElyyEk7r0Os"}
        target="_blank"
        className="text-blackone mt-6 md:mt-0 md:ml-6 border-blackone ff-lato text-sm border rounded-3xl inline-flex justify-center items-center py-1.5 px-5"
      >
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6239 2.63935C17.4169 1.85987 16.8069 1.24601 16.0325 1.03764C14.6288 0.659073 9 0.659073 9 0.659073C9 0.659073 3.37124 0.659073 1.96752 1.03764C1.19306 1.24597 0.583137 1.85987 0.376137 2.63935C0 4.05221 0 6.99999 0 6.99999C0 6.99999 0 9.94778 0.376137 11.3606C0.583137 12.1401 1.19306 12.754 1.96752 12.9624C3.37124 13.3409 9 13.3409 9 13.3409C9 13.3409 14.6288 13.3409 16.0325 12.9624C16.8069 12.754 17.4169 12.1401 17.6239 11.3606C18 9.94778 18 6.99999 18 6.99999C18 6.99999 18 4.05221 17.6239 2.63935Z"
            fill="#FF0000"
          />
          <path
            d="M7.15918 9.67637L11.8637 7.00007L7.15918 4.32362V9.67637Z"
            fill="white"
          />
        </svg>
        <span className="pl-2">Watch our AI agent Casey</span>
      </Link>
    </div>
  );

  return (
    <section
      className={`w-full mt-[115px] min-h-[500px] flex items-center`}
      style={{ backgroundColor: bg }}
    >
      <div className="container mx-auto flex py-6 px-6 items-center lg:flex-row flex-col">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {page === "salesforce" && (
            <div className="flex mb-8 justify-center lg:justify-start">
              <img
                src="/salesforce-2.png"
                alt="salesforce appexchange partner"
                className="lg:h-14 mr-3 h-10"
              />
              <img
                src="/salesforce-1.png"
                alt="salesforce consulting partner"
                className="lg:h-14 mr-3 h-10"
              />
            </div>
          )}
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
            href="/contact-us"
            className="text-base mt-5 capitalize inline-block ff-lato ease-in-up rounded-md border bg-red py-2 px-8 text-white transition duration-300"
          >
            Request a Demo
          </Link>
          {youtubelinks && (
            <div className="mt-7">
              <YoutubeLinks />{" "}
            </div>
          )}
          {page === "salesman" && (
            <div className="flex mt-7 text-center justify-center lg:justify-start mb-8 flex-col md:flex-row w-full md:w-auto ">
              <Link
                href={"https://www.youtube.com/watch?v=mPZgbljL7TE"}
                target="_blank"
                className="text-blackone border-blackone ff-lato text-sm border rounded-3xl inline-flex justify-center items-center py-1.5 px-5"
              >
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6239 2.63935C17.4169 1.85987 16.8069 1.24601 16.0325 1.03764C14.6288 0.659073 9 0.659073 9 0.659073C9 0.659073 3.37124 0.659073 1.96752 1.03764C1.19306 1.24597 0.583137 1.85987 0.376137 2.63935C0 4.05221 0 6.99999 0 6.99999C0 6.99999 0 9.94778 0.376137 11.3606C0.583137 12.1401 1.19306 12.754 1.96752 12.9624C3.37124 13.3409 9 13.3409 9 13.3409C9 13.3409 14.6288 13.3409 16.0325 12.9624C16.8069 12.754 17.4169 12.1401 17.6239 11.3606C18 9.94778 18 6.99999 18 6.99999C18 6.99999 18 4.05221 17.6239 2.63935Z"
                    fill="#FF0000"
                  />
                  <path
                    d="M7.15918 9.67637L11.8637 7.00007L7.15918 4.32362V9.67637Z"
                    fill="white"
                  />
                </svg>
                <span className="pl-2">Watch our AI agent Salesman</span>
              </Link>
            </div>
          )}

          {page === "simcase" && (
            <div className="flex mt-7 text-center justify-center lg:justify-start mb-8 flex-col md:flex-row w-full md:w-auto ">
              <Link
                href={"https://www.youtube.com/watch?v=ElyyEk7r0Os"}
                target="_blank"
                className="text-blackone mt-6 md:mt-0  border-blackone ff-lato text-sm border rounded-3xl inline-flex justify-center items-center py-1.5 px-5"
              >
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6239 2.63935C17.4169 1.85987 16.8069 1.24601 16.0325 1.03764C14.6288 0.659073 9 0.659073 9 0.659073C9 0.659073 3.37124 0.659073 1.96752 1.03764C1.19306 1.24597 0.583137 1.85987 0.376137 2.63935C0 4.05221 0 6.99999 0 6.99999C0 6.99999 0 9.94778 0.376137 11.3606C0.583137 12.1401 1.19306 12.754 1.96752 12.9624C3.37124 13.3409 9 13.3409 9 13.3409C9 13.3409 14.6288 13.3409 16.0325 12.9624C16.8069 12.754 17.4169 12.1401 17.6239 11.3606C18 9.94778 18 6.99999 18 6.99999C18 6.99999 18 4.05221 17.6239 2.63935Z"
                    fill="#FF0000"
                  />
                  <path
                    d="M7.15918 9.67637L11.8637 7.00007L7.15918 4.32362V9.67637Z"
                    fill="white"
                  />
                </svg>
                <span className="pl-2">Watch our AI agent Casey</span>
              </Link>
            </div>
          )}
        </div>
        <div className="w-full lg:w-1/2 lg:pl-11 flex justify-center mt-5 lg:mt-0">
          <img
            src={img}
            alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
            className="w-3/4 lg:w-full h-full object-cover p-2 lg:p-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
