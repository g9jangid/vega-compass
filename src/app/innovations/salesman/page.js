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
import Link from "next/link";
import menuData from "@/components/Navigation/menuData";
import Accordian from "@/components/Accordian";

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
        subhead="INNOVATIONS"
        title="Boost sales efficiency with our Salesman AI"
        img="/assets/images/innovations/sales-hero.png"
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
          SalesMan - CRM Upsell Cross-sell <br className="hidden lg:block" />{" "}
          recommendations plugin
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            At VegaCompass, we’ve developed Salesman, a powerful CRM plug-in
            designed to revolutionize your sales strategy. By leveraging
            machine-learning algorithms, Salesman provides automated upsell and
            cross-sell product recommendations tailored to your customers’
            needs. Whether it’s identifying opportunities for additional sales
            or delivering intelligent product suggestions like ‘Customers who
            bought this, also bought that,’ Salesman empowers your sales team to
            make data-driven decisions and boost revenue effortlessly. Perfect
            for B2B businesses, it seamlessly integrates with your CRM to
            enhance every opportunity.
          </p>
        </div>
      </section>

      <section className="w-full  pt-20 mt-12 px-6">
        <div className=" container mx-auto flex justify-center flex-col items-center mt-4">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              Benefits
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8 mt-4">
            Salesman CRM benefits
          </h2>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1000px]">
            <div className="w-full lg:w-1/2 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Sales
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt=""
                    className="mr-2"
                  />
                  Displays related products and gives matching Opportunity count
                  (All and any products match)
                </span>
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt=""
                    className="mr-2"
                  />
                  Helps plan appropriate upsell, cross sell and more products
                  sales
                </span>
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt=""
                    className="mr-2"
                  />
                  Better account mining options through data driven insights
                </span>
              </p>
            </div>

            <div className="w-full lg:w-1/2 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/innovations/sales-1.png" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[1000px]">
            <div className="w-full lg:w-1/2 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/innovations/marketing-1.png" alt="" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Marketing
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt=""
                    className="mr-2"
                  />
                  Recommendations report gives most recommended products with
                  corresponding accounts.
                </span>
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt=""
                    className="mr-2"
                  />
                  Plan appropriate 1:1 marketing activity for selected customers
                </span>{" "}
                <br />
                <span className="font-bold">Example:</span> When a product is
                recommended by CRM Plugin for few accounts, marketing team can
                plan a focused seminar or webinar, conference only for selected
                customers
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[1000px]">
            <div className="w-full lg:w-1/2 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Cross team collaboration
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt=""
                    className="mr-2"
                  />
                  Better cross team collaboration to coordinate for more product
                  Sales/Marketing
                </span>

                <span className="flex items-center mb-3">
                  <img
                    src="/assets/images/orange-tick.svg"
                    alt=""
                    className="mr-2"
                  />
                  Better trainings planning
                </span>
              </p>
            </div>

            <div className="w-full lg:w-1/2 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/innovations/cross-team.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
