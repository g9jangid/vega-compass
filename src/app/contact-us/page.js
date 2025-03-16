/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
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
import caseStudiesData from "@/constants/case-studies.json";
import Link from "next/link";
import menuData from "@/components/Navigation/menuData";
import Select from "react-select";

// export const metadata = {
//   title: "Vega Compass",
//   description: "Vega Compass",
// };

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
      <section className="container mx-auto flex justify-center flex-col items-center mt-32 lg:mt-48">
        <div className="text-center flex flex-col items-center">
          <h1 className="ff-raleway text-2xl md:text-3xl lg:text-4xl text-blackone capitalize font-bold">
            Contact Us
          </h1>
          <p className="text-blackone ff-lato mt-4">
            Have a question or need assistance? Our team is ready to help
          </p>
        </div>
      </section>

      <section className="container mx-auto text-left mt-16 px-6 justify-center flex flex-col lg:flex-row items-center max-w-[1000px]">
        <div className="w-full lg:w-1/2 lg:pr-6">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-blackone ff-lato pb-1 pt-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="Enter your first name"
                  className="mt-1 ff-lato block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-blackone ff-lato pb-1 pt-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Enter your last name"
                  className="mt-1 ff-lato block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-blackone ff-lato pb-1 pt-2"
              >
                Business Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your business email address"
                className="mt-1 ff-lato block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="company"
                className="block text-blackone ff-lato pb-1 pt-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Enter your company name"
                className="mt-1 ff-lato block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-blackone ff-lato pb-1 pt-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message"
                className="mt-1 ff-lato block h-52 w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full text-sm ff-lato ease-in-up rounded-md bg-red py-3 px-8 text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp lg:block md:px-9 lg:px-6 xl:px-9"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-6 mt-16 lg:mt-0">
          <img
            src="/assets/images/contact-us.png"
            alt=""
            className="w-full h-auto p-3"
          />
        </div>
      </section>

      <section className="container mx-auto flex justify-center flex-col items-center mt-16 lg:mt-32">
        <div className="text-center flex flex-col items-center">
          <h3 className="ff-raleway text-2xl md:text-3xl lg:text-4xl text-blackone capitalize font-semibold">
            Our offices
          </h3>
        </div>
      </section>
      <section className="container mx-auto text-left mt-8 lg:mt-16 px-6 justify-center flex flex-col lg:flex-row items-center max-w-[1000px]">
        <div className="w-full lg:w-1/2 lg:pr-6">
          <p className="ff-lato font-semibold text-blackone">Pune (India)</p>
          <p className="text-[#585858] font-medium ff-lato leading-normal pt-3">
            Vega Compass Technologies Pvt Limited,
            <br />
            406, Ambrosia Galaxy,Pancard <br />
            Club Rd, Baner, Pune, India
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-6 mt-16 lg:mt-0">
          <p className="ff-lato font-semibold text-blackone">Texas (USA)</p>
          <p className="text-[#585858] font-medium ff-lato leading-normal pt-3">
            1903, Romeria Drive, Austin,
            <br />
            Texas, USA
          </p>
        </div>
      </section>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
