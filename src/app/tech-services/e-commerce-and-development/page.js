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
        title={
          <>
            Your Partner for{" "}
            <span className="whitespace-nowrap">e-Commerce</span> Success and
            Custom Innovation
          </>
        }
        img="/assets/images/tech-services/hero-10.png"
        bg="#F3FFFF"
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
          e-Commerce and <br className="hidden lg:block" />
          Custom Development
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            At VegaCompass, we are dedicated to transforming your digital
            presence with our cutting-edge e-commerce solutions and tailor-made
            software development services. Whether you&apos;re a growing
            business or an established enterprise, we have the expertise and
            innovative strategies to help you achieve your goals.
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
                E-Commerce Development
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                In today’s fast-paced digital world, having a robust online
                store is essential. We specialize in building e-commerce
                platforms that are visually stunning, highly functional, and
                designed for growth. Our team focuses on crafting seamless user
                experiences that drive engagement and conversions.
                <br />
                <br />
                Our E-Commerce Solutions Include:
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
                      Custom E-Commerce Platforms:
                    </span>{" "}
                    We design and develop platforms tailored to your unique
                    needs, ensuring your online store stands out in the crowded
                    marketplace.
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
                      WooCommerce & Shopify Development:
                    </span>{" "}
                    If you&apos;re looking for a reliable platform to launch
                    your store quickly, we are experts in WooCommerce, Shopify,
                    and other industry-leading e-commerce platforms.
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
                      Mobile-Friendly Design:
                    </span>{" "}
                    We ensure that your e-commerce site is fully responsive,
                    providing a seamless shopping experience across all devices.
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
                      Payment Gateway Integration:
                    </span>{" "}
                    We integrate secure payment gateways that provide customers
                    with smooth and safe transaction processes.
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
                      Inventory Management Solutions:
                    </span>{" "}
                    Keep track of your products effortlessly with our integrated
                    inventory management systems.
                  </span>
                </p>
              </div>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/tech-services/10-1.png" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1100px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/tech-services/10-2.png" alt="" />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Custom CRM peripheral development
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Every business is unique, and so are its technology needs. At
                VegaCompass, we offer custom development services designed to
                meet the specific requirements of your business. Whether you
                need to streamline operations, enhance customer engagement, or
                improve decision-making, we build software solutions that bring
                your ideas to life.
                <br />
                <br />
                Our Custom Development Services Include:
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
                      Web Application complimenting your CRM:
                    </span>{" "}
                    Whether you need a custom web portal, Vendor application, or
                    internal management system, we develop scalable web
                    applications using the latest technologies complimenting
                    your CRM work.
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
                      Mobile Application Development:
                    </span>{" "}
                    Enhance customer engagement with a mobile app built
                    specifically for your business needs, compatible with both
                    iOS and Android.
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
                      Legacy System Modernization:
                    </span>{" "}
                    We upgrade and modernize your outdated systems, ensuring
                    they’re efficient, secure, and ready for future business
                    demands.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
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
