/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
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
import team from "@/constants/team.json";
import Link from "next/link";
import menuData from "@/components/Navigation/menuData";
import TeamModal from "@/components/TeamModal";

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
  const [teamData, setTeamData] = useState(team);
  const [activeTab, setActiveTab] = useState("");
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (activeTab == "") {
      setTeamData(team);
    } else {
      setTeamData(team.filter((item) => item.categories.includes(activeTab)));
    }
  }, [activeTab]);

  const openModalWithData = (teamMemberData) => {
    setIsModalOpen(true);
    setActiveTeamMember(teamMemberData);
  };

  const categories = [
    {
      label: "View All",
      value: "",
    },
    {
      label: "Core Team",
      value: "core-team",
    },
    {
      label: "Consulting",
      value: "consulting",
    },
    {
      label: "Salesforce",
      value: "salesforce",
    },
    {
      label: "MS Dynamics",
      value: "ms-dynamics",
    },
    {
      label: "HubSpot",
      value: "hubspot",
    },
    {
      label: "Marketo",
      value: "marketo",
    },
    {
      label: "Odoo",
      value: "odoo",
    },
    {
      label: "Zoho",
      value: "zoho",
    },
    {
      label: "MuleSoft",
      value: "mulesoft",
    },
    {
      label: "Atom",
      value: "atom",
    },
    {
      label: "ServiceNow",
      value: "servicenow",
    },
    {
      label: "AI Architect",
      value: "ai-architect",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="container mx-auto flex justify-center px-6 flex-col items-center mt-32 lg:mt-48">
        <div className="text-center flex flex-col items-center">
          <h1 className="ff-raleway text-2xl md:text-3xl lg:text-4xl text-blackone font-semibold">
            Meet the Vega Compass team
          </h1>
          <p className="text-blackone ff-lato mt-4">
            Turning challenges into opportunities with a team committed to your
            business’s success.
          </p>
        </div>
      </section>

      <section className="container mx-auto text-left mt-16 px-6 justify-center flex flex-col items-center max-w-[1200px]">
        <div className="w-full text-center overflow-x-auto lg:overflow-x-hidden flex lg:block max-h-[54px] lg:max-h-max">
          {categories.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveTab(item.value)}
              className={`whitespace-nowrap ${
                activeTab === item.value
                  ? "inline-block cursor-pointer m-2 bg-red capitalize border border-red text-white ff-lato text-sm py-2 px-8 rounded-full font-medium"
                  : "inline-block cursor-pointer m-2 bg-white hover:bg-rose-50 capitalize border border-[#DCDCE3] text-[#585858] ff-lato text-sm py-2 px-8 rounded-full font-medium"
              } `}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="w-full mt-10 flex flex-wrap">
          {teamData?.length ? (
            teamData.map((item, i) => (
              <div key={i} className="w-full md:w-1/2 lg:w-1/3 p-2">
                <div
                  className="w-full relative aspect-square rounded-lg cursor-pointer hover-effect-team-card"
                  onClick={() => openModalWithData(item)}
                >
                  <img
                    src={`/assets/images/team/${item.img}`}
                    className="w-full aspect-square object-cover object-center rounded-lg"
                    alt=""
                  />
                  <div className="bg-white rounded-lg w-[calc(100%-32px)] p-3 absolute bottom-4 left-4 text-center ">
                    <p className="text-blackone ff-raleway text-lg font-semibold member-name">
                      {item.name}
                    </p>
                    <p className="text-[#737373] uppercase ff-lato text-sm member-desg">
                      {item.desg}
                    </p>
                    <p className="text-blackone ff-raleway text-lg font-semibold read-more-btn hidden">
                      Know More
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full py-10 flex justify-center items-center">
              <p>No profiles found.</p>
            </div>
          )}
        </div>
      </section>

      {isModalOpen && (
        <TeamModal
          onClose={() => setIsModalOpen(false)}
          data={activeTeamMember}
        />
      )}

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
