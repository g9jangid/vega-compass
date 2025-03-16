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
  const tiles = [
    {
      id: 1,
      img: "/assets/images/tech-services/usell-crossell.png",
      title: "Up sell Cross Sell Recommendations engine",
      desc: "Lorem ipsum dolor sit amet consectetur. Faucibus vestibulum enim tristique viverra amet cursus. Ultrices mauris sapien nunc lectus nunc sem lectus.",
    },
    {
      id: 2,
      img: "/assets/images/tech-services/simcase.png",
      title: "Simcase",
      desc: "Lorem ipsum dolor sit amet consectetur. Faucibus vestibulum enim tristique viverra amet cursus. Ultrices mauris sapien nunc lectus nunc sem lectus.",
    },
    {
      id: 3,
      img: "/assets/images/tech-services/event-manage.png",
      title: "Event Management",
      desc: "Lorem ipsum dolor sit amet consectetur. Faucibus vestibulum enim tristique viverra amet cursus. Ultrices mauris sapien nunc lectus nunc sem lectus.",
    },
    {
      id: 4,
      img: "/assets/images/tech-services/sales and marketing alignment.png",
      title: "Sales",
      desc: "Lorem ipsum dolor sit amet consectetur. Faucibus vestibulum enim tristique viverra amet cursus. Ultrices mauris sapien nunc lectus nunc sem lectus.",
    },
    {
      id: 5,
      img: "/assets/images/tech-services/customer support.png",
      title: "Customer Service",
      desc: "Lorem ipsum dolor sit amet consectetur. Faucibus vestibulum enim tristique viverra amet cursus. Ultrices mauris sapien nunc lectus nunc sem lectus.",
    },
  ];

  const accordinaData = [
    {
      title: "Advisory",
      content: (
        <div>
          <p className="flex items-center">
            <img src="/assets/images/purple-tick.svg" alt="" className="mr-2" />
            Business case development and cost of ownership
          </p>
          <p className="flex items-center">
            <img src="/assets/images/purple-tick.svg" alt="" className="mr-2" />
            Change management and planning
          </p>
          <p className="flex items-center">
            <img src="/assets/images/purple-tick.svg" alt="" className="mr-2" />
            Cloud strategy
          </p>
          <p className="flex items-center">
            <img src="/assets/images/purple-tick.svg" alt="" className="mr-2" />
            Content strategy
          </p>
          <p className="flex items-center">
            <img src="/assets/images/purple-tick.svg" alt="" className="mr-2" />
            Customer experience strategy
          </p>
          <p className="flex items-center">
            <img src="/assets/images/purple-tick.svg" alt="" className="mr-2" />
            Designing and blueprinting
          </p>
          <p className="flex items-center">
            <img src="/assets/images/purple-tick.svg" alt="" className="mr-2" />
            DevSecOps
          </p>
          <p className="flex items-center">
            <img src="/assets/images/purple-tick.svg" alt="" className="mr-2" />
            Data Cloud and AI
          </p>
        </div>
      ),
      img: "/assets/images/tech-services/advisary.png",
    },
    {
      title: "Implementation",
      content: (
        <div>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            All Salesforce core products
          </p>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            Salesforce industry cloud
          </p>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            Salesforce Platform
          </p>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            Salesforce Einstein and Data Cloud 
          </p>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            MuleSoft
          </p>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            Salesforce Trailhead
          </p>
          <p className="flex items-center">
            <img src="/assets/images/blue-tick.svg" alt="" className="mr-2" />
            Salesforce DevOps
          </p>
        </div>
      ),
      img: "/assets/images/tech-services/implementaion.png",
    },
    {
      title: "Support and Scale",
      content: (
        <div>
          <p className="flex items-center">
            <img src="/assets/images/orange-tick.svg" alt="" className="mr-2" />
            Application optimization
          </p>
          <p className="flex items-center">
            <img src="/assets/images/orange-tick.svg" alt="" className="mr-2" />
            Business process efficiency audit
          </p>
          <p className="flex items-center">
            <img src="/assets/images/orange-tick.svg" alt="" className="mr-2" />
            Managed services
          </p>
          <p className="flex items-center">
            <img src="/assets/images/orange-tick.svg" alt="" className="mr-2" />
            Salesforce Lightning migration
          </p>
          <p className="flex items-center">
            <img src="/assets/images/orange-tick.svg" alt="" className="mr-2" />
            Shared services
          </p>
          <p className="flex items-center">
            <img src="/assets/images/orange-tick.svg" alt="" className="mr-2" />
            System evaluation and reference architecture services
          </p>
          <p className="flex items-center">
            <img src="/assets/images/orange-tick.svg" alt="" className="mr-2" />
            User interface improvement
          </p>
        </div>
      ),
      img: "/assets/images/tech-services/support-and-scale.png",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="TECH SERVICES"
        title="We make Salesforce work smarter for you"
        img="/assets/images/tech-services/salesform-crm-hero.png"
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
          Salesforce CRM
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            As strategic partners, VegaCompass and Salesforce provide
            experience-led business transformation rooted in contextual
            knowledge. Together, we craft unique, high-quality, impactful
            solutions that deliver differentiated business outcomes.
          </p>
        </div>
      </section>

      <section className="container mx-auto flex justify-center flex-col items-center mt-16">
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

      <section className="container mx-auto flex justify-center flex-col items-center mt-16">
        <div className="text-center flex flex-col items-center">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            Solutions
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-3 px-6">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          Vega Compass solutions on <br /> Salesforce platform
        </h2>
        <div className="w-full flex flex-wrap justify-start items-center">
          {tiles.map((item, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/2 self-stretch flex">
              <div className="m-2 self-stretch">
                <div className="border rounded-md pt-2 py-2 pb-3 text-left info-card">
                  <img
                    src={item.img}
                    alt=""
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

      <section className="container mx-auto text-center mt-32">
        <div className="w-full bg-[#FFF7F0] p-6 md:p-10 lg:p-24 rounded-xl">
          <div className="text-center flex flex-col items-center">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              OFFERINGS
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-10 mt-4">
            Industry-specific CRM, designed for you
          </h2>
          <AccordianBig />
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
