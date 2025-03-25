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
      <section className="container mx-auto flex justify-center flex-col items-center mt-[140px] bg-[#FFF7F0] rounded-2xl px-6 md:px-12 lg:px-24">
        <div className="text-center flex flex-col items-center pt-24">
          <h1 className="ff-raleway text-3xl md:text-4xl lg:text-5xl text-blackone font-semibold">
            We bring the best <span className="text-red">CRM minds</span> to
            work for you
          </h1>
          <p className="text-blackone ff-lato mt-6 max-w-[660px]">
            Vegacompass operated as Thutech for the last 10 years and has now
            rebranded to Vegacompass, reinforcing our commitment to CRM
            consulting excellence.
          </p>
        </div>
        <div className="bg-[#F7E4D8] p-6 w-full rounded-2xl -mb-20 mt-14 flex flex-col lg:flex-row max-w-[1000px]">
          <div className="w-full lg:w-1/2">
            <div className="w-full py-10 lg:px-6 lg:border-r-2 border-[#E3B79B]">
              <div className="text-left flex flex-col items-left">
                <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
                  our MISSION
                </p>
                <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
              </div>
              <h2 className="ff-raleway font-semibold text-4xl py-4">
                Vegacompass Mission
              </h2>
              <p className="ff-lato text-blackone">
                Our mission is to enable our customers to achieve tangible and
                productive output with their CRM investment.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full py-10 lg:pr-6 lg:pl-12">
              <div className="text-left flex flex-col items-left">
                <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
                  our MISSION
                </p>
                <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
              </div>
              <h2 className="ff-raleway font-semibold text-4xl py-4">
                Vegacompass Vision
              </h2>
              <p className="ff-lato text-blackone">
                Our vision is to be a most trusted advisory and consulting firm
                for CRM process and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto text-left mt-40 px-6 justify-center flex flex-col lg:flex-row items-center max-w-[1000px]">
        <div className="w-full lg:w-1/2 lg:pr-6">
          <div className="text-left flex flex-col items-left">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              INTRODUCTION
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway font-semibold text-4xl py-4">Who we are</h2>
          <p className="ff-lato text-blackone">
            Vegacompass is a specialized CRM process and technology consulting
            company. We are probably the only company to specialize in CRM only
            consulting globally.
            <br />
            <br />
            Our asset is our highly experienced and knowledgeable team which has
            worked with multiple clients in different geographies. Each core
            team member carries 15+ years of experience in CRM domain having
            worked on streamlining Marketing, Sales and Customer support
            operations globally.
            <br />
            <br />
            Our strength is the core and deep understanding of CRM processes,
            technology and operations.
            <br />
            <br />
            We work on a CRM engagement bringing in domain knowledge, process
            expertise, deep technical insights with focus on ensuring the CRM
            delivers more than what&apos;s needed. We take pride in being CRM
            experts and publish regular updates on latest CRM happenings
            globally. We have built multiple CRM focused innovative offerings to
            help derive best results for our customers.
            <br />
            <br />
            We ensure a right mix of technical and process consulting team
            members to ensure client get real value from the CRM tool. They
            should be able to manage leads better, generate more business,
            better sales, have 360 customer view and manage their support
            operations seamlessly.
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-6 mt-16 lg:mt-0">
          <img
            src="/assets/images/about/intro.png"
            alt=""
            className="w-full h-auto p-3 lg:scale-125 origin-left"
          />
        </div>
      </section>

      <section className="container mx-auto flex justify-center flex-col items-center mt-16 lg:mt-32">
        <div className="text-center flex flex-col items-center">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              our VALUES
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h3 className="ff-raleway text-2xl md:text-3xl mt-4 lg:text-4xl text-blackone capitalize font-semibold">
            Vega Compass values
          </h3>
        </div>
      </section>

      <section className="container mx-auto text-left mt-8 px-6 justify-center flex flex-col lg:flex-row items-center max-w-[1000px]">
        <div className="w-full lg:w-1/3 lg:pr-6 text-center flex flex-col justify-center items-center">
          <img
            src="/assets/images/about/trust.png"
            alt=""
            className="w-20 h-auto m-1"
          />
          <p className="ff-raleway text-2xl font-semibold text-blackone mt-3">
            Trust
          </p>
        </div>
        <div className="w-full lg:w-1/3 lg:pl-6 mt-16 lg:mt-0 text-center flex flex-col justify-center items-center">
          <img
            src="/assets/images/about/security.png"
            alt=""
            className="w-20 h-auto m-1"
          />
          <p className="ff-raleway text-2xl font-semibold text-blackone mt-3">
            Transparency
          </p>
        </div>
        <div className="w-full lg:w-1/3 lg:pl-6 mt-16 lg:mt-0 text-center flex flex-col justify-center items-center">
          <img
            src="/assets/images/about/innovation.png"
            alt=""
            className="w-20 h-auto m-1"
          />
          <p className="ff-raleway text-2xl font-semibold text-blackone mt-3">
            Innovation
          </p>
        </div>
      </section>

      <section className="container mx-auto text-left mt-40 px-6 justify-center flex flex-col lg:flex-row items-center max-w-[1000px]">
        <div className="w-full lg:w-1/2 lg:pr-6">
          <div className="text-left flex flex-col items-left">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              Our approach
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway font-semibold text-4xl py-4">
            The Vega Way
          </h2>
          <h3 className="pb-4 ff-raleway font-semibold text-2xl">
            Our project CRM approach
          </h3>
          <p className="ff-lato text-blackone">
            We work on CRM engagements by bringing together domain knowledge,
            process expertise, and deep technical insights, ensuring that CRM
            delivers more than just its intended functions.
            <br />
            <br />
            We take pride in being CRM experts and regularly publish updates on
            the latest CRM developments worldwide. Our team has built multiple
            CRM-focused innovative offerings to help businesses derive maximum
            value from their CRM systems.
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-6 mt-16 lg:mt-0">
          <img
            src="/assets/images/about/the-vega-way.png"
            alt=""
            className="w-full h-auto p-3"
          />
        </div>
      </section>

      <section className="container mx-auto text-left mt-40 px-6 justify-center flex flex-col lg:flex-row items-center max-w-[1000px]">
        <div className="w-full lg:w-1/2 lg:pr-6">
          <div className="text-left flex flex-col items-left">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              WORKING METHODOLOGY
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway font-semibold text-4xl py-4">
            Our working methodology
          </h2>
          <h3 className="pb-2 pt-4 ff-lato font-medium text-xl">People</h3>
          <p className="ff-lato text-blackone">
            Our highly experienced team works closely with key stakeholders to
            understand business needs and optimize CRM implementations
            accordingly.
          </p>
          <h3 className="pb-2 pt-4 ff-lato font-medium text-xl">Process</h3>
          <p className="ff-lato text-blackone">
            We focus on identifying the right requirements, enabling CRM
            processes, and optimizing them for long-term efficiency and growth.
          </p>
          <h3 className="pb-2 pt-4 ff-lato font-medium text-xl">Technology</h3>
          <p className="ff-lato text-blackone">
            We specialize in top CRM platforms, integration, and development
            technologies, helping businesses adopt the best solutions based on
            their needs and budget.
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-6 mt-16 lg:mt-0">
          <img
            src="/assets/images/about/working.png"
            alt=""
            className="w-full h-auto p-3"
          />
        </div>
      </section>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
