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
      img: "/assets/images/consulting/7-1.png",
      title: "Comprehensive CRM Audit",
      desc: "We assess your CRM's performance, utilization, and alignment with your goals, covering user adoption, workflows, and feature usage to provide a clear operational overview.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/7-2.png",
      title: "Cost Analysis & Optimization",
      desc: "We identify unnecessary CRM expenses and recommend cost-saving measures, like adjusting subscription plans, removing redundant features, or renegotiating vendor terms.",
    },
    {
      id: 3,
      img: "/assets/images/consulting/7-3.png",
      title: "Workflow & Process Optimization",
      desc: "We streamline your CRM workflows by identifying bottlenecks and inefficiencies, allowing your team to focus on high-impact activities.",
    },
    {
      id: 4,
      img: "/assets/images/consulting/7-4.png",
      title: "License Management & Consolidation",
      desc: "We help review and optimize CRM license usage, ensuring you pay only for what you need, and assist with contract consolidation to reduce costs.",
    },
    {
      id: 5,
      img: "/assets/images/consulting/7-5.png",
      title: "Data Integrity & Cleanup",
      desc: "We improve data quality by removing duplicates and correcting inaccuracies, making your CRM a more reliable tool for sales, marketing, and service.",
    },
    {
      id: 6,
      img: "/assets/images/consulting/7-6.png",
      title: "User Training & Adoption",
      desc: "We provide training to boost CRM adoption and productivity, addressing feature underutilization due to system complexity.",
    },
    {
      id: 7,
      img: "/assets/images/consulting/7-7.png",
      title: "Security & Compliance Review",
      desc: "Our CRM audits review security and compliance with standards (e.g., GDPR, CCPA), identifying vulnerabilities and recommending ways to enhance data protection.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="Maximize CRM ROI with targeted audit and cost optimization"
        img="/assets/images/consulting/hero-7.png"
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
          CRM Audit and Technical Debt Optimization
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            Over time, businesses often accumulate unused features, redundant
            processes, and unnecessary costs in their CRM systems. Whether your
            CRM has grown too complex, too costly, or is underutilized, our
            audit and optimization service helps you regain control. We
            thoroughly assess your current CRM usage, identify areas for
            improvement, and provide actionable strategies to reduce costs while
            enhancing performance. We ensure your CRM is delivering maximum ROI
            by conducting thorough audits and recommending cost-saving
            improvements tailored to your needs.
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
          Hear from our clients
        </h2>
        <TestimonialSlider />
      </section>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
      {openDownloadModal && (
        <DownloadModal
          filename="vegacompass-crm-process-&-technology-audit-questionnaire.xlsx"
          heading="Access Your Free CRM Audit and Technical Debt Optimization Checklist"
          handleClose={() => setOpenDownloadModal(false)}
        />
      )}
    </main>
  );
}
