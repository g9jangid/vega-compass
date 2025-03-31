/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navigation from "@/components/Navigation/Navigation";
import VegaCompassInAction from "@/components/VegaCompassInAction";
import CRMInquiry from "@/components/CRMInquiry";
import Footer from "@/components/Footer";
import caseStudiesData from "@/constants/case-studies.json";
import Link from "next/link";
import getSEOTags from "@/utils/getSeoTags";

export const generateMetadata = async ({ params: { slug } }) => {
  const activeStudy = caseStudiesData.find((item) => item.url === slug);
  return getSEOTags(
    "Case Study | " + activeStudy?.title || "",
    activeStudy?.brief || ""
  );
};

export default async function Page({ params }) {
  const { slug } = await params;
  const activeStudy = caseStudiesData.find((item) => item.url === slug);
  let relatedCaseStudies = caseStudiesData.filter(
    (item) =>
      item.service_slug === activeStudy.service_slug &&
      item.url !== activeStudy.url
  );

  function getRandomItems(arr, count = 4) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  if (!relatedCaseStudies.length) {
    relatedCaseStudies = getRandomItems(caseStudiesData, 4);
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="w-full h-[200px] md:h-[280px] lg:h-[390px] mt-[115px]">
        <img
          src={`/assets/images/case-studies/${activeStudy.img}`}
          alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
          className="w-full h-full object-cover object-center"
        />
      </section>
      <section className="container mx-auto flex justify-start flex-col items-start mt-14 max-w-[1050px] px-6">
        <div className="text-left flex flex-col items-start">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            CASE STUDY
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
        <h1 className="ff-raleway font-semibold text-2xl md:text-3xl lg:text-4xl text-blackone !leading-snug mt-3">
          {activeStudy?.title || ""}
        </h1>
        {activeStudy?.client && (
          <div className="mt-10">
            <h2 className="ff-raleway font-semibold text-2xl lg:text-3xl text-blackone">
              About the Client
            </h2>
            <p className="ff-lato text-blackone mt-4">{activeStudy?.client}</p>
          </div>
        )}
        <div className="mt-10">
          <h2 className="ff-raleway font-semibold  text-2xl lg:text-3xl text-blackone">
            Description
          </h2>
          <p className="ff-lato text-blackone mt-4">
            {activeStudy?.brief || ""}
          </p>
        </div>
        <div className="mt-10">
          <h2 className="ff-raleway font-semibold  text-2xl lg:text-3xl text-blackone">
            Work Details
          </h2>
          {activeStudy?.work_details.map((item, i) => (
            <div key={i} className="mt-4 flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_930_3423)">
                  <path
                    d="M7.99995 3.31255L3.3125 8L7.99995 12.6875L12.6874 8L7.99995 3.31255Z"
                    fill="#A4FBC4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.55658 6.15829L6.16219 1.55267C7.17513 0.539734 8.83266 0.539734 9.8456 1.55267L14.4512 6.15826C15.4641 7.1712 15.4641 8.82876 14.4512 9.8417L9.8456 14.4473C8.83266 15.4603 7.17513 15.4603 6.16219 14.4473L1.55658 9.84173C0.54364 8.82879 0.54364 7.17123 1.55658 6.15829Z"
                    stroke="#020288"
                    strokeWidth="0.45386"
                    strokeMiterlimit="22.9256"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.906 5.82446L8.00587 9.72461L6.28125 7.99999"
                    stroke="#020288"
                    strokeWidth="0.45386"
                    strokeMiterlimit="22.9256"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_930_3423">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p className="ff-lato text-blackone flex-1 pl-3">{item || ""}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="ff-raleway font-semibold  text-2xl lg:text-3xl text-blackone">
            Benefits
          </h2>
          {activeStudy?.benefits.map((item, i) => (
            <div key={i} className="mt-4 flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_930_3423)">
                  <path
                    d="M7.99995 3.31255L3.3125 8L7.99995 12.6875L12.6874 8L7.99995 3.31255Z"
                    fill="#A4FBC4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.55658 6.15829L6.16219 1.55267C7.17513 0.539734 8.83266 0.539734 9.8456 1.55267L14.4512 6.15826C15.4641 7.1712 15.4641 8.82876 14.4512 9.8417L9.8456 14.4473C8.83266 15.4603 7.17513 15.4603 6.16219 14.4473L1.55658 9.84173C0.54364 8.82879 0.54364 7.17123 1.55658 6.15829Z"
                    stroke="#020288"
                    strokeWidth="0.45386"
                    strokeMiterlimit="22.9256"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.906 5.82446L8.00587 9.72461L6.28125 7.99999"
                    stroke="#020288"
                    strokeWidth="0.45386"
                    strokeMiterlimit="22.9256"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_930_3423">
                    <rect
                      width="15"
                      height="15"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <p className="ff-lato text-blackone flex-1 pl-3">{item || ""}</p>
            </div>
          ))}
        </div>

        {activeStudy?.collab && (
          <div className="mt-10 text-right w-full">
            <p className="ff-lato italic text-sm text-gray-600">
              {activeStudy?.collab}
            </p>
          </div>
        )}

        <div className="mt-24">
          <h2 className="ff-raleway font-semibold  text-2xl lg:text-3xl text-blackone">
            More Case Studies
          </h2>
        </div>
      </section>
      <section className="container mx-auto mt-3 px-6 justify-start flex flex-wrap items-stretch max-w-[1150px]">
        {relatedCaseStudies.map((item, i) => (
          <div key={i} className="w-full md:w-1/2 p-3 mb-3">
            <div className="w-full">
              <img
                src={`/assets/images/case-studies/${item.img}`}
                className="rounded-lg aspect-video object-cover object-center"
                alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              />
              <h2 className="mt-3 ff-raleway font-semibold text-xl text-blackone">
                {item.title}
              </h2>
              <p className="mt-2 ff-lato text-sm text-[#585858] line-clamp-2">
                {item.brief}
              </p>
              <Link
                href={`/case-studies/${item.url}`}
                className="text-base capitalize mt-4 inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
        {!relatedCaseStudies.length && (
          <p className="text-gray-500 text-center text-2xl font-medium ff-lato w-full px-6 py-10">
            No case studies found for this filter.
          </p>
        )}
      </section>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
