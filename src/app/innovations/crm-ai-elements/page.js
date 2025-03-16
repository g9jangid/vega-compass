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
  const consultancyTiles = menuData.find((item) => item.id === 3).submenu;

  const accordinaData = [
    {
      title: "Discover needs and benefits",
      content: (
        <div>
          <p className="flex items-center">
            <img src="/assets/images/purple-tick.svg" alt="" className="mr-2" />
            AI maturity check for data
          </p>
          <p className="flex items-center">
            <img src="/assets/images/purple-tick.svg" alt="" className="mr-2" />
            Technology-enabled process discovery
          </p>
          <p className="flex items-center">
            <img src="/assets/images/purple-tick.svg" alt="" className="mr-2" />
            Value assessment and business case creation
          </p>
          <p className="flex items-center">
            <img src="/assets/images/purple-tick.svg" alt="" className="mr-2" />
            Technology roadmap
          </p>
        </div>
      ),
      img: "/assets/images/innovations/deliver-needs.png",
    },
    {
      title: "Enable CRM based AI",
      content: (
        <div>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            AI and Automation
          </p>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            Change Management
          </p>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            Digital enablement services
          </p>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            Implementation and Operation at Scale
          </p>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            Pre-built platforms and solutions
          </p>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            AI-engineering lifecycle
          </p>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            Open AI based solution design and approach
          </p>
        </div>
      ),
      img: "/assets/images/innovations/enable-crm.png",
    },
    {
      title: "Utilization",
      content: (
        <div>
          <p className="flex items-center">
            <img src="/assets/images/orange-tick.svg" alt="" className="mr-2" />
            Portfolio maturity and risk assessment
          </p>
          <p className="flex items-center">
            <img src="/assets/images/orange-tick.svg" alt="" className="mr-2" />
            Technology assessment and implementation
          </p>
          <p className="flex items-center">
            <img src="/assets/images/orange-tick.svg" alt="" className="mr-2" />
            Model validation services
          </p>
          <p className="flex items-center">
            <img src="/assets/images/orange-tick.svg" alt="" className="mr-2" />
            Governance and process standardization
          </p>
          <p className="flex items-center">
            <img src="/assets/images/orange-tick.svg" alt="" className="mr-2" />
            Ai based security for the data. No data stored for AI logic
          </p>
        </div>
      ),
      img: "/assets/images/innovations/utilization.png",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="INNOVATIONS"
        title="AI-Driven CRM solutions for smarter decisions"
        img="/assets/images/innovations/crm-ai-hero.png"
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
          CRM AI Elements
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            At VegaCompass, we enhance your CRM with intelligent AI elements
            that optimize processes, improve customer experiences, and drive
            actionable insights. Transform the way you manage relationships and
            decisions with smarter tools tailored to your business.
          </p>
        </div>
      </section>

      <section className="container mx-auto flex justify-center flex-col items-center mt-24">
        <div className="text-center flex flex-col items-center">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            SERVICES
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-3 px-6">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          Our Services
        </h2>
        <Accordian data={accordinaData} />
      </section>

      <section className="w-full bg-[#FFF7F0] py-20 mt-12 px-6">
        <div className=" container mx-auto flex justify-center flex-col items-center mt-4">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              SOLUTIONS
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8 mt-4">
            AI Elements Offerings
          </h2>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[900px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Sentiment Analysis
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Judge customer sentiment with the case content for better
                customer success​. Analyze case content to understand customer
                sentiment, enhancing customer success strategies and outcomes.
              </p>
              <Link
                href="/signup"
                className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
              >
                learn More
              </Link>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/innovations/crm-ai-1.png" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[900px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/innovations/crm-ai-2.png" alt="" />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Summarization
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Large text summaries for better concise meaning​. Employ
                extensive text summaries to convey complex information
                effectively, ensuring clearer and concise understanding.
              </p>
              <Link
                href="/signup"
                className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
              >
                learn More
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[900px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Audio to Text
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Get automated text conversion for calls in 50 languages​.
                Utilize automated text conversion for calls in 50 languages,
                enabling seamless multilingual communication.
              </p>
              <Link
                href="/signup"
                className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
              >
                learn More
              </Link>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/innovations/crm-ai-3.png" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[900px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/innovations/crm-ai-4.png" alt="" />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Lead Scoring (Industry Based)​
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Score leads in real time based on industry standard
                defined parameters with score reason​. Instantly score leads in
                real time using industry standard parameters, while recording
                the reasons behind each score.
              </p>
              <Link
                href="/signup"
                className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
              >
                learn More
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-3 max-w-[900px]">
            <div className="w-full lg:w-3/5 text-left lg:pr-16 order-2 lg:order-none mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Large Document Analysis
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Get summaries, answers and better results from large content and
                files​. Extract summaries, answers, and improved outcomes from
                large content and files for enhanced productivity and
                efficiency.
              </p>
              <Link
                href="/signup"
                className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
              >
                learn More
              </Link>
            </div>

            <div className="w-full lg:w-2/5 text-left lg:pl-5 order-1 lg:order-none">
              <div className="inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/innovations/crm-ai-5.png" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between items-center mb-8 lg:mb-3 max-w-[900px]">
            <div className="w-full lg:w-2/5 text-left">
              <div className=" inline-block py-6 px-9 rounded-xl">
                <img src="/assets/images/innovations/crm-ai-6.png" alt="" />
              </div>
            </div>

            <div className="w-full lg:w-3/5 text-left lg:pl-16 lg:pr-5 mt-5 lg:mt-0">
              <h3 className="ff-raleway font-semibold text-3xl text-blackone">
                Company Evaluation
              </h3>
              <p className="ff-lato text-base text-blackone mt-4 mb-6">
                Evaluate health of a company with predefined global parameters.
                Assess a company’s health using predefined global parameters,
                gaining valuable insights into its overall performance.
              </p>
              <Link
                href="/signup"
                className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
              >
                learn More
              </Link>
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
