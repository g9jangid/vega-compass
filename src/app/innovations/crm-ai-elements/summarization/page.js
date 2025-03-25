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

  const funtionality = [
    "TL;DR summarization (short for “Too Long; Didn’t Read”) is a technique used to generatebrief and concise summaries of longer texts or documents.",
    "The purpose of TL;DR summarization is to provide a quick overview of the main points orkey information in a more easily digestible format.",
    "TL;DR summaries can be useful in language translation services as they provide a shortversion of the content, making it easier to generate accurate translations.",
  ];

  const benefits = [
    "TL;DR summaries offer swift overviews of lengthy content, saving time for readers lacking time to read the whole text.",
    "It helps users grasp key points in a fraction of the time needed for complete reading.",
    "TL;DR summarization aids content consumption amid information overload, letting users efficiently skim to find worthier pieces.",
    "TL;DR summaries support decision-making by quickly presenting crucial insights, without delving into full texts.",
    "Shareable summaries make passing key information to others easy and convenient.",
    "TL;DR makes information accessible to busy, disabled, or non-native speakers.",
    "TL;DR summaries are common in social media, news, emails, offering previews for more sharing and engagement.",
    "Content Curation: Summaries aid creators in selecting and presenting relevant information.",
    "Summaries serve as study aids, helping students review key concepts quickly and reinforce understanding.",
    "TL;DR previews help users find relevant information efficiently, particularly in vast databases or archives.",
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <section
        className={`w-full mt-[115px] min-h-[500px] flex items-center`}
        style={{ backgroundColor: "#F3FFFF" }}
      >
        <div className="container mx-auto flex py-6 px-6 items-center lg:flex-row flex-col">
          <div className="w-full text-center">
            <div className="mb-2 text-center">
              <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
                SUMMARIZATION
              </p>
              <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2 inline-block relative top-[-7px]"></div>
            </div>

            <h1 className="ff-raleway font-semibold text-3xl lg:text-4xl xl:text-5xl text-blackone leading-tight lg:leading-tight xl:leading-tight text-center pt-10 lg:pt-0">
              AI-powered summarization
              <br className="hidden lg:block" /> for smarter insights
            </h1>
            <p className="ff-lato text-blackone mt-3">
              Generate concise, digestible summaries from large texts with
              <br className="hidden lg:block" />
              AI-driven TL;DR technology
            </p>
            <Link
              href="/contact-us"
              className="text-base mt-5 capitalize inline-block ff-lato ease-in-up rounded-md border bg-red py-2 px-8 text-white transition duration-300"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex justify-center flex-col items-center mt-28 px-6">
        <div className="text-center flex flex-col items-center">
          <h2 className="ff-raleway font-semibold text-3xl lg:text-4xl text-blackone">
            Functionality
          </h2>
        </div>
        <div className="w-full flex lg:flex-row flex-col mt-8">
          {funtionality.map((item, i) => (
            <div className="w-full lg:w-1/3 p-2 h-auto" key={i}>
              <div className="bg-[#FFF7F0] p-6 rounded-lg h-full">
                <p className="ff-raleway font-semibold text-3xl text-[#D2833F]">
                  0{i + 1}
                </p>
                <p className="ff-lato text-blackone mt-3">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full bg-[#FFF7F0] px-6">
        <section className="container mx-auto flex justify-center flex-col items-center mt-28 py-24">
          <div className="text-center flex flex-col items-center">
            <h2 className="ff-raleway font-semibold text-3xl lg:text-4xl text-blackone">
              Potential Benefits
            </h2>
          </div>
          <div className="w-full flex mt-8 flex-wrap max-w-[980px]">
            {benefits.map((item, i) => (
              <div key={i} className="w-full lg:w-1/2 p-2">
                <div className="flex mb-5">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative top-1"
                  >
                    <g clipPath="url(#clip0_1470_4585)">
                      <path
                        d="M11 0C4.93436 0 0 4.93436 0 11C0 17.0656 4.93436 22 11 22C17.0656 22 22 17.0656 22 11C22 4.93436 17.0656 0 11 0Z"
                        fill="#D2833F"
                      />
                      <path
                        d="M16.5767 8.66901L10.6183 14.6272C10.4396 14.806 10.2049 14.896 9.97028 14.896C9.73563 14.896 9.50098 14.806 9.32222 14.6272L6.34311 11.6481C5.98459 11.2898 5.98459 10.7104 6.34311 10.352C6.70146 9.99348 7.2807 9.99348 7.63922 10.352L9.97028 12.6831L15.2806 7.37289C15.639 7.01437 16.2182 7.01437 16.5767 7.37289C16.9351 7.73125 16.9351 8.31049 16.5767 8.66901Z"
                        fill="#FAFAFA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1470_4585">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-1 ff-lato text-blackone pl-4">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="container mx-auto flex justify-center flex-col items-center mt-28 px-6">
        <div className="text-center flex flex-col items-center">
          <h2 className="ff-raleway font-semibold text-3xl lg:text-4xl text-blackone">
            Technical Specifications
          </h2>
        </div>
        <div className="w-full flex lg:flex-row flex-col mt-8 items-stretch">
          <div className="w-full lg:w-1/4 p-2 h-auto">
            <div className="w-full bg-[#FFF7F0] rounded-lg p-6 h-full">
              <p className="ff-raleway mb-4 font-semibold text-xl text-[#D2833F]">
                Objects Used
              </p>
              <p className="text-sm ff-lato text-blackone">Case</p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 p-2 h-auto">
            <div className="w-full bg-[#F8F0FF] rounded-lg p-6 h-full">
              <p className="ff-raleway mb-4 font-semibold text-xl text-[#8744C3]">
                Custom Fields
              </p>
              <p className="text-sm ff-lato text-blackone">
                Case &gt; Description
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 p-2 h-auto">
            <div className="w-full bg-[#F3FFFF] rounded-lg p-6 h-full">
              <p className="ff-raleway mb-4 font-semibold text-xl text-[#37ADAD]">
                APIs Used
              </p>
              <p className="text-sm ff-lato text-blackone">
                OpenAI (Services: Completions)
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 p-2 h-auto">
            <div className="w-full bg-[#F0FFF1] rounded-lg p-6 h-full">
              <p className="ff-raleway mb-4 font-semibold text-xl text-[#317F37]">
                Lightning Web Components developed
              </p>
              <p className="text-sm ff-lato text-blackone">
                caseDescResponseCompo
              </p>
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
