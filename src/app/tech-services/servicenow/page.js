/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Navigation from "@/components/Navigation/Navigation";
import Team from "@/components/Team";
import TestimonialSlider from "@/components/TestimonialSlider";
import TalkToExpert from "@/components/TalkToExpert";
import VegaCompassInAction from "@/components/VegaCompassInAction";
import CRMInquiry from "@/components/CRMInquiry";
import Footer from "@/components/Footer";
import HeroOne from "@/components/HeroOne";
import CaseStudiesSlides from "@/components/CaseStudiesSlides";
import Accordian from "@/components/Accordian";
import AccordianBig from "@/components/AccordianBig";

import Link from "next/link";
import menuData from "@/components/Navigation/menuData";

export const metadata = {
  title: "Vega Compass",
  description: "Vega Compass",
};

// export const metadata = {
//   title: "UI Graphic – 3D Illustrations & Animations for Beautiful UI Design",
//   description:
//     "Discover premium 3D illustrations and background animations crafted for modern UI design. Perfect for SaaS, startups, and landing pages.",
//   keywords: [
//     "3D illustrations",
//     "UI design assets",
//     "SaaS design",
//     "landing page animations",
//     "website illustrations",
//     "premium UI assets",
//     "background animations",
//   ],
//   metadataBase: new URL("https://uigraphic.com"),
//   openGraph: {
//     title: "UI Graphic – 3D Illustrations & Animations for Beautiful UI Design",
//     description:
//       "Discover premium 3D illustrations and background animations crafted for modern UI design.",
//     url: "https://uigraphic.com",
//     siteName: "UI Graphic",
//     images: [
//       {
//         url: "https://uigraphic.com/og-image.jpg", // Replace with your OG image
//         width: 1200,
//         height: 630,
//         alt: "UI Graphic Preview",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "UI Graphic – 3D Illustrations & Animations for Beautiful UI Design",
//     description:
//       "Discover premium 3D illustrations and background animations crafted for modern UI design.",
//     site: "@uigraphic", // Replace with your Twitter handle
//     creator: "@uigraphic", // Replace with your Twitter handle
//     images: ["https://uigraphic.com/og-image.jpg"],
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-32x32.png",
//     apple: "/apple-touch-icon.png",
//   },
//   themeColor: "#ffffff",
//   authors: [{ name: "Vega Compass", url: "" }],
//   generator: "Next.js",
//   applicationName: "Vega Compass",
//   referrer: "origin-when-cross-origin",
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: false,
//     },
//   },
// };

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="TECH SERVICES"
        title="Empower your teams with ServiceNow"
        img="/assets/images/tech-services/hero-3.png"
        bg="#FFF7F0"
      />

      <section className="container mx-auto flex justify-center flex-col items-center mt-16">
        <div className="text-center flex flex-col items-center">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            INTRODUCTION
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-3 px-6 justify-center flex flex-col items-center">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          Service Now
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            As an industry leader in IT services, we understand the importance
            of streamlining your business processes and improving operational
            efficiency. That’s why we specialize in providing comprehensive
            ServiceNow technical services that empower your organization to
            transform digitally, enhance customer experiences, and drive
            innovation. Our expertise spans across the entire ServiceNow
            platform, allowing us to offer customized solutions that align with
            your unique business needs.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#F8F0FF] py-20 mt-32 px-6">
        <div className=" container mx-auto flex justify-center flex-col items-center mt-4">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              SERVICES
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8 mt-4">
            Our Services
          </h2>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                ServiceNow Implementation
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                We provide structured ServiceNow implementation, aligning
                modules with your IT strategy and organizational business
                objectives for maximum value.
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />

                  <span>
                    <span className="font-semibold">Discovery & Planning:</span>{" "}
                    We begin by conducting a thorough analysis of your business
                    processes to create a tailored implementation plan.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    <span className="font-semibold">Custom Configuration:</span>{" "}
                    We customize ServiceNow workflows, modules, and integrations
                    to meet your specific requirements.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    <span className="font-semibold">Data Migration:</span>{" "}
                    Ensuring a smooth transition, we handle data migration with
                    precision to avoid disruptions.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    <span className="font-semibold">
                      Testing & Go-Live Support:
                    </span>{" "}
                    Our team performs extensive testing and provides go-live
                    support for a flawless deployment.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/tech-services/3-1.png" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/tech-services/3-2.png" alt="" />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                ServiceNow Custom Development
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                We specialize in building bespoke ServiceNow workflows and
                applications tailored to address specific and unique business
                challenges.
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />

                  <span>
                    <span className="font-semibold">
                      Custom Workflows & Applications:
                    </span>{" "}
                    We develop custom workflows and applications within
                    ServiceNow to address your specific business challenges.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    <span className="font-semibold">
                      Advanced Scripting & API Integrations:
                    </span>{" "}
                    Our team handles complex scripting and integration with
                    third-party systems to extend the functionality of your
                    ServiceNow instance.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    <span className="font-semibold">UI & UX Enhancements:</span>{" "}
                    We enhance the user interface and experience to make sure
                    your team enjoys a seamless experience.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                ServiceNow Integration Services
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Our integration services connect ServiceNow with IT systems,
                cloud platforms, and third-party tools for seamless data
                synchronization.
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />

                  <span>
                    <span className="font-semibold">
                      Third-Party Tool Integration:
                    </span>{" "}
                    We integrate ServiceNow with popular tools like Jira, SAP,
                    Salesforce, and more.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    <span className="font-semibold">API Development:</span> Our
                    team creates APIs for secure and efficient data exchange
                    across platforms.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    <span className="font-semibold">
                      Automation & Orchestration:
                    </span>{" "}
                    By automating workflows between different systems, we help
                    you eliminate manual work and improve process efficiency.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/tech-services/3-3.png" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/tech-services/3-4.png" alt="" />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                ServiceNow Managed Services
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                We deliver 24/7 ServiceNow support, including incident
                resolution, proactive monitoring, and performance optimization
                for operational continuity.
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />

                  <span>
                    <span className="font-semibold">Proactive Monitoring:</span>{" "}
                    We continuously monitor your ServiceNow instance to identify
                    and resolve issues before they impact your business.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    <span className="font-semibold">Incident Management:</span>{" "}
                    Our team resolves ServiceNow issues swiftly, ensuring
                    minimal downtime and disruption.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    <span className="font-semibold">
                      Version Upgrades & Patch Management:
                    </span>{" "}
                    We manage regular upgrades to keep your platform updated
                    with the latest features and security patches.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                ServiceNow Consulting & Advisory
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Our consultants analyze your workflows to provide actionable
                insights, optimizing ServiceNow’s alignment with your long-term
                business goals.
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />

                  <span>
                    <span className="font-semibold">
                      Platform Strategy & Roadmap:
                    </span>{" "}
                    We help you create a roadmap for your ServiceNow
                    implementation, ensuring it aligns with your long-term
                    business strategy.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    <span className="font-semibold">
                      Process Optimization:{" "}
                    </span>
                    We analyze your existing workflows and recommend
                    enhancements that can streamline operations and reduce
                    costs.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/purple-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    <span className="font-semibold">
                      Training & Enablement:
                    </span>{" "}
                    Our team offers customized training sessions to ensure your
                    staff is fully equipped to utilize ServiceNow effectively.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/tech-services/3-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 flex flex-col mt-24">
        <div>
          <div className="text-left flex flex-col items-start">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              SPECIALITY
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-4 mt-4">
            Why choose us for Service Now
          </h2>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 p-3 mb-4 flex flex-col">
            <span className="mt-1">
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_813_1672)">
                  <rect
                    width="25"
                    height="25"
                    transform="translate(0 0.5)"
                    fill="white"
                  />
                  <path
                    d="M14.5831 10.3958C14.5831 11.5448 13.6487 12.4791 12.4998 12.4791C11.3508 12.4791 10.4164 11.5448 10.4164 10.3958C10.4164 9.24686 11.3508 8.31248 12.4998 8.31248C13.6487 8.31248 14.5831 9.24686 14.5831 10.3958ZM22.0498 9.05936C21.8008 8.6104 21.4696 8.26665 21.0935 8.0229C20.4227 7.58957 20.0654 6.79269 20.2425 6.01457C20.3435 5.56769 20.3373 5.08019 20.1925 4.57603C19.9362 3.68123 19.2071 2.95207 18.3123 2.69582C17.8081 2.55102 17.3206 2.54478 16.8748 2.64582C16.0956 2.8229 15.2987 2.46665 14.8654 1.79478C14.6227 1.41873 14.2779 1.08748 13.83 0.838525C13.0154 0.387484 11.9852 0.387484 11.1706 0.838525C10.7216 1.08748 10.3779 1.41873 10.1352 1.79478C9.70185 2.46561 8.90497 2.8229 8.12581 2.64582C7.67997 2.54478 7.19247 2.55102 6.68831 2.69582C5.79351 2.95207 5.06435 3.68123 4.8081 4.57603C4.66331 5.08019 4.65705 5.56873 4.7581 6.01457C4.93518 6.79373 4.57789 7.59061 3.90705 8.0229C3.52997 8.26561 3.19976 8.6104 2.9508 9.05936C2.72268 9.46977 2.61226 9.93644 2.61435 10.4021C2.61226 10.8677 2.72372 11.3333 2.9508 11.7448C3.19976 12.1937 3.53101 12.5375 3.90705 12.7812C4.57789 13.2146 4.93518 14.0114 4.7581 14.7896C4.65705 15.2364 4.66331 15.7239 4.8081 16.2291C5.06435 17.1239 5.79351 17.8531 6.68831 18.1094C7.19247 18.2541 7.67997 18.2604 8.12581 18.1594C8.90497 17.9823 9.70185 18.3385 10.1352 19.0104C10.3779 19.3864 10.7216 19.7177 11.1706 19.9666C11.9852 20.4177 13.0164 20.4177 13.83 19.9666C14.2789 19.7177 14.6227 19.3864 14.8654 19.0104C15.2987 18.3396 16.0956 17.9823 16.8748 18.1594C17.3206 18.2604 17.8081 18.2541 18.3123 18.1094C19.2071 17.8531 19.9362 17.1239 20.1925 16.2291C20.3373 15.725 20.3435 15.2364 20.2425 14.7896C20.0654 14.0104 20.4227 13.2135 21.0935 12.7812C21.4706 12.5385 21.8008 12.1937 22.0498 11.7448C22.2779 11.3344 22.3883 10.8677 22.3862 10.4021C22.3883 9.93644 22.2768 9.47082 22.0498 9.05936ZM12.4883 14.5646C10.1904 14.5646 8.32164 12.6958 8.32164 10.3979C8.32164 8.09998 10.1904 6.23123 12.4883 6.23123C14.7862 6.23123 16.655 8.09998 16.655 10.3979C16.655 12.6958 14.7862 14.5646 12.4883 14.5646ZM8.4383 20.2208C7.68205 20.3687 6.87997 20.3312 6.11435 20.1114C4.62893 19.6864 3.43101 18.5427 2.91018 17.0969L0.508096 19.4125C-0.504404 20.3896 0.0862214 22.1041 1.48622 22.2489L3.32476 22.4385L3.55185 24.0719C3.7383 25.4166 5.3758 25.976 6.34664 25.0271L9.88935 21.5937C9.31331 21.2239 8.8133 20.7771 8.4383 20.2208ZM15.1112 21.5937L18.6539 25.0271C19.6248 25.976 21.2623 25.4166 21.4487 24.0719L21.6758 22.4385L23.5143 22.2489C24.9143 22.1041 25.505 20.3896 24.4925 19.4125L22.0904 17.0969C21.5696 18.5427 20.3716 19.6864 18.8862 20.1114C18.1206 20.3312 17.3185 20.3687 16.5623 20.2208C16.1873 20.7771 15.6873 21.2239 15.1112 21.5937Z"
                    fill="#BD90F4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_813_1672">
                    <rect
                      width="25"
                      height="25"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="flex-1 pt-4">
              <p className="ff-raleway font-medium text-xl text-blackone mb-1">
                Certified Experts
              </p>
              <span className="ff-lato text-sm text-[#585858]">
                Our team consists of certified ServiceNow professionals with
                deep knowledge of the platform.
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-3 mb-4 flex flex-col">
            <span className="mt-1">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_813_1669)">
                  <rect
                    width="25"
                    height="25"
                    transform="translate(0.333984 0.5)"
                    fill="white"
                  />
                  <path
                    d="M2.00892 19.25C2.87054 20.7454 4.78133 21.2592 6.27674 20.3976C6.27776 20.397 6.27874 20.3964 6.27976 20.3958L6.74329 20.1281C7.61829 20.8767 8.62405 21.4573 9.70994 21.8406V22.375C9.70994 24.1009 11.1091 25.5 12.8349 25.5C14.5608 25.5 15.9599 24.1009 15.9599 22.375V21.8406C17.046 21.4567 18.0518 20.8754 18.9266 20.126L19.3922 20.3948C20.888 21.2577 22.8001 20.7447 23.6631 19.2489C24.526 17.7532 24.013 15.841 22.5172 14.9781L22.0547 14.7114C22.2629 13.5786 22.2629 12.4172 22.0547 11.2843L22.5172 11.0177C24.013 10.1547 24.526 8.24263 23.6631 6.74683C22.8001 5.25107 20.888 4.73804 19.3922 5.60098L18.9287 5.8687C18.0528 5.121 17.0464 4.5415 15.9599 4.15937V3.625C15.9599 1.89912 14.5608 0.5 12.8349 0.5C11.1091 0.5 9.70994 1.89912 9.70994 3.625V4.15937C8.6239 4.54331 7.61809 5.12456 6.74329 5.87397L6.27767 5.6042C4.78186 4.74121 2.86976 5.25425 2.00682 6.75C1.14388 8.24575 1.65686 10.1579 3.15267 11.0208L3.61517 11.2875C3.40696 12.4204 3.40696 13.5817 3.61517 14.7146L3.15267 14.9812C1.66102 15.8465 1.14969 17.7549 2.00892 19.25ZM12.8349 8.83335C15.1361 8.83335 17.0016 10.6988 17.0016 13C17.0016 15.3012 15.1361 17.1667 12.8349 17.1667C10.5338 17.1667 8.66829 15.3012 8.66829 13C8.66829 10.6988 10.5338 8.83335 12.8349 8.83335Z"
                    fill="#BD90F4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_813_1669">
                    <rect
                      width="25"
                      height="25"
                      fill="white"
                      transform="translate(0.333984 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="flex-1 pt-4">
              <p className="ff-raleway font-medium text-xl text-blackone mb-1">
                Tailored Solutions
              </p>
              <span className="ff-lato text-sm text-[#585858]">
                We take the time to understand your unique business needs and
                deliver customized solutions.
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-3 mb-4 flex flex-col">
            <span className="mt-1">
              <svg
                width="26"
                height="15"
                viewBox="0 0 26 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.2999 0.366113C25.788 0.854275 25.788 1.64572 25.2999 2.13389L15.2999 12.1339C14.8118 12.622 14.0203 12.622 13.5321 12.1339L9.85795 8.45975C9.61388 8.21563 9.21815 8.21563 8.97408 8.45975L2.7999 14.6339C2.31174 15.122 1.52029 15.122 1.03213 14.6339C0.543978 14.1458 0.543978 13.3542 1.03213 12.8661L8.53213 5.36613C9.02029 4.87796 9.81174 4.87796 10.2999 5.36613L13.974 9.04025C14.2181 9.28437 14.6139 9.28437 14.858 9.04025L23.5321 0.366113C24.0203 -0.122037 24.8118 -0.122037 25.2999 0.366113Z"
                  fill="#BD90F4"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.166 1.25C18.166 0.55965 18.7256 0 19.416 0H24.416C25.1064 0 25.666 0.55965 25.666 1.25V6.25C25.666 6.94037 25.1064 7.5 24.416 7.5C23.7256 7.5 23.166 6.94037 23.166 6.25V3.125C23.166 2.77982 22.8861 2.5 22.541 2.5H19.416C18.7256 2.5 18.166 1.94035 18.166 1.25Z"
                  fill="#BD90F4"
                />
              </svg>
            </span>
            <div className="flex-1 pt-4">
              <p className="ff-raleway font-medium text-xl text-blackone mb-1">
                Proven Track Record
              </p>
              <span className="ff-lato text-sm text-[#585858]">
                We have a proven track record of successful ServiceNow
                implementations and long-term client partnerships.
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 p-3 mb-4 flex flex-col">
            <span className="mt-1">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_813_1667)">
                  <rect width="25" height="25" fill="white" />
                  <path
                    d="M3.7905 9.37491C3.14675 9.37491 2.64675 8.79366 2.76029 8.16032C3.13425 6.07595 4.17279 4.13845 5.73425 2.67491C7.74988 0.784281 10.3822 -0.158427 13.1572 0.0217815C18.3874 0.359281 22.4728 4.91241 22.3957 10.352C22.354 13.2874 19.9072 15.6259 16.9707 15.6259H13.9165C13.5415 15.9864 13.0353 16.2103 12.4749 16.2103C11.3238 16.2103 10.3915 15.278 10.3915 14.127C10.3915 12.9759 11.3238 12.0437 12.4749 12.0437C13.4207 12.0437 14.2103 12.678 14.4645 13.5426H16.9707C18.779 13.5426 20.2926 12.102 20.3124 10.2947C20.3603 5.97595 17.1405 2.36866 13.0228 2.10199C10.8363 1.96657 8.75092 2.70407 7.15821 4.19678C5.89883 5.37699 5.08738 6.88845 4.803 8.54886C4.71967 9.03428 4.28217 9.37699 3.7905 9.37699V9.37491ZM12.5009 17.7082C8.65196 17.7082 5.32175 20.0957 4.21446 23.6478C4.1155 23.9645 4.17279 24.3093 4.36967 24.5759C4.56654 24.8426 4.878 24.9999 5.20925 24.9999H19.7926C20.1238 24.9999 20.4353 24.8426 20.6322 24.5759C20.829 24.3093 20.8863 23.9645 20.7874 23.6478C19.6801 20.0957 16.3499 17.7082 12.5009 17.7082ZM15.5572 11.4582H18.0093C18.1499 10.9614 18.2301 10.4384 18.2301 9.89574C18.2301 6.73116 15.6655 4.16657 12.5009 4.16657C9.33634 4.16657 6.77175 6.73116 6.77175 9.89574C6.77175 11.4489 7.39258 12.8551 8.39571 13.8874C8.52175 11.7353 10.2905 10.0239 12.4749 10.0239C13.7155 10.0239 14.8093 10.5874 15.5582 11.4582H15.5572Z"
                    fill="#BD90F4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_813_1667">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="flex-1 pt-4">
              <p className="ff-raleway font-medium text-xl text-blackone mb-1">
                End-to-End Support
              </p>
              <span className="ff-lato text-sm text-[#585858]">
                From implementation to ongoing support, we provide end-to-end
                ServiceNow services to help you every step of the way.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <CaseStudiesSlides />
      </section>

      <Team />
      <TalkToExpert />

      <section className="w-full mx-auto text-center mt-28 testimonial-section">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-12">
          Hear from our clients
        </h2>
        <TestimonialSlider />
      </section>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
