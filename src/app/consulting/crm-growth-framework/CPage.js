/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Navigation from "@/components/Navigation/Navigation";
import Team from "@/components/Team";
import TestimonialSlider from "@/components/TestimonialSlider";
import TalkToExpert from "@/components/TalkToExpert";
import VegaCompassInAction from "@/components/VegaCompassInAction";
import CRMInquiry from "@/components/CRMInquiry";
import Footer from "@/components/Footer";
import HeroOne from "@/components/HeroOne";
import CaseStudiesSlides from "@/components/CaseStudiesSlides";
import Link from "next/link";
import DownloadModal from "@/components/DownloadModal";

export default function Home() {
  const [openDownloadModal, setOpenDownloadModal] = useState(false);
  const tiles = [
    {
      id: 1,
      img: "/assets/images/consulting/5-1.png",
      title: "Diagnostics",
      desc: "We analyze your needs and customer paths to find efficiency gains and cost savings. Our focus is identifying streamlining opportunities and cost-cutting measures to boost your business performance.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/5-2.png",
      title: "GTM Funnel and Planning",
      desc: "We review your Salesforce setup, prioritize enhancements, and establish standards for improved productivity through targeted upgrades.",
    },
    {
      id: 3,
      img: "/assets/images/consulting/5-3.png",
      title: "Design & Build",
      desc: "Our CRM architects develop custom applications tailored to your business needs, enhancing CRM functionality to strengthen customer connections.",
    },
    {
      id: 4,
      img: "/assets/images/consulting/5-4.png",
      title: "Maintain Operations",
      desc: "We oversee the CRM backlog, tackling technical debt and data quality issues, ensuring these crucial elements enhance operational efficiency and are not disregarded.",
    },
    {
      id: 5,
      img: "/assets/images/consulting/5-5.png",
      title: "Implementations and Risk-Free Migration",
      desc: "We support essential features, streamline processes, and capture critical data insights that drive productivity, operational efficiency, and informed decision-making.",
    },
    {
      id: 6,
      img: "/assets/images/consulting/5-6.png",
      title: "Analytics",
      desc: "Our team develops effective data models and architectures to simplify reporting, enabling thorough data analysis and driving better decision-making with valuable business insights.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="Scale smart with a growth-driven powerful CRM framework"
        img="/assets/images/consulting/hero-5.png"
        bg="#F8F0FF"
      />

      <section className="container mx-auto flex justify-center flex-col items-center mt-16">
        <div className="text-center flex flex-col items-center">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            our approach
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-3 px-6 justify-center flex flex-col items-center">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          Our CRM Growth Framework
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            At Vegacompass, we understand that sustainable business growth is
            driven by strong customer relationships. Our CRM Growth Framework is
            designed to help businesses unlock the full potential of their CRM
            systems, transforming them from simple data management tools into
            powerful engines for growth. By aligning your CRM with your business
            strategy, we empower you to build deeper connections with customers,
            increase revenue, and scale efficiently.
          </p>
          <div className="w-full mt-8">
            <button
              onClick={() => setOpenDownloadModal(true)}
              className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
            >
              Download Checklist
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex justify-center flex-col items-center mt-24">
        <div className="text-center flex flex-col items-center">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            OFFERINGS
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-3 px-6">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          What we offer
        </h2>
        <div className="w-full flex flex-wrap justify-center items-center">
          {tiles.map((item, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/3 self-stretch flex">
              <div className="m-2 self-stretch">
                <div className="border rounded-md pt-2 py-2 pb-3 text-left info-card">
                  <img
                    src={item.img}
                    alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                    className="w-full h-72 object-contain p-4"
                  />
                  <h3 className="ff-raleway font-semibold text-2xl text-blackone mt-11 px-8">
                    {item.title}
                  </h3>
                  <p className="text-[#585858] ff-lato mt-4 mb-6 px-8">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <CaseStudiesSlides />
      </section>

      <Team />
      <TalkToExpert />

      <section className="w-full mx-auto text-center mt-28 testimonial-section">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-12">
          Hear about our work
        </h2>
        <TestimonialSlider />
      </section>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
      {openDownloadModal && (
        <DownloadModal
          filename="vegacompass-crm-growth-framework.xlsx"
          heading="Access Your Free CRM Growth Framework Checklist"
          handleClose={() => setOpenDownloadModal(false)}
        />
      )}
    </main>
  );
}
