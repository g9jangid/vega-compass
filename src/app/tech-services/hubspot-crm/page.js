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
        title="Maximize HubSpot’s potential with our expertise"
        img="/assets/images/tech-services/hero-5.png"
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
          Hubspot CRM
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            At VegaCompass, we specialize in helping businesses harness the full
            power of HubSpot’s marketing, sales, and customer service platforms
            through advanced technical services. Whether you&apos;re setting up
            HubSpot for the first time, integrating it with your existing
            systems, or optimizing your workflows, our team of certified IT
            professionals ensures your HubSpot instance operates smoothly and
            efficiently.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#F3FFFF] py-20 mt-32 px-6">
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
                HubSpot Setup & Customization
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Your business is unique, and so are your HubSpot needs. Our
                experts will:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Set up your HubSpot account from scratch, configuring it to
                    meet your business goals.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Customize HubSpot features, dashboards, and workflows for
                    tailored marketing, sales, and customer service processes.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Migrate data from your existing platforms, ensuring a
                    seamless transition without data loss.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/tech-services/5-1.png" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/tech-services/5-2.png" alt="" />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                HubSpot Integrations
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                To get the most out of HubSpot, it needs to work in harmony with
                your other tools. Our team will:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Integrate HubSpot with your CRM, ERP, eCommerce platforms,
                    or any other business systems you rely on.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Build custom API integrations for bespoke requirements,
                    ensuring that all your systems communicate effectively.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Automate workflows between HubSpot and third-party tools to
                    streamline operations and reduce manual work.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                HubSpot Data Management & Migration
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Data is at the heart of HubSpot’s functionality. We help you
                make the most of it with:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Full data migration services, including data cleaning,
                    mapping, and migration planning.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Optimized data structure within HubSpot to ensure accurate
                    tracking and reporting.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Ongoing data management to maintain data hygiene and improve
                    overall platform performance.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/tech-services/5-3.png" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/tech-services/5-4.png" alt="" />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                HubSpot CRM Customization
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Your CRM is the backbone of your customer engagement strategy.
                We offer:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Full CRM customization to align HubSpot with your sales and
                    customer service processes.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Advanced reporting and dashboard customization, giving you
                    real-time insights into performance metrics.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Development of custom properties, workflows, and automations
                    for more efficient lead management.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                HubSpot Technical Support & Maintenance
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                HubSpot is a powerful tool, but technical issues can arise. Our
                support services include:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Troubleshooting and resolution of HubSpot-related issues to
                    minimize downtime.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Regular audits and system checks to ensure everything is
                    running smoothly.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Ongoing maintenance to keep your HubSpot instance optimized
                    for growth.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/tech-services/5-5.png" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/tech-services/5-6.png" alt="" />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                HubSpot Training & Consulting
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Get the most from HubSpot with personalized training sessions.
                We provide:
              </p>
              <div>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />

                  <span>
                    Tailored training for your marketing, sales, and support
                    teams to help them maximize HubSpot’s features.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Ongoing consulting to optimize campaigns, workflows, and
                    reporting as your business scales.
                  </span>
                </p>
                <p className="flex items-start mb-2">
                  <img
                    src="/assets/images/blue-tick.svg"
                    alt=""
                    className="mr-2 relative top-1"
                  />
                  <span>
                    Best practices for managing HubSpot at an advanced level.
                  </span>
                </p>
              </div>
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
