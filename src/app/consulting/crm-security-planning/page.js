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
      img: "/assets/images/consulting/13-1.png",
      title: "Access Control & Role-Based Permissions",
      desc: "We enforce strict data security through role-based permissions, ensuring each user’s access is carefully managed and aligned with their responsibilities to protect sensitive customer data.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/13-2.png",
      title: "Multi-Factor Authentication (MFA)",
      desc: "Our CRM systems use MFA to boost security, adding extra verification layers beyond a single password, ensuring only authorized users gain access.",
    },
    {
      id: 3,
      img: "/assets/images/consulting/13-3.png",
      title: "Real-Time Monitoring & Alerts",
      desc: "We continuously monitor login attempts, data access, and unusual activities, triggering real-time alerts for any behavior that might suggest unauthorized access.",
    },
    {
      id: 4,
      img: "/assets/images/consulting/13-4.png",
      title: "Threat Detection & Response",
      desc: "Equipped with machine learning and anomaly detection, our CRM identifies and reacts to potential threats swiftly, addressing any signs of malicious behavior.",
    },
    {
      id: 5,
      img: "/assets/images/consulting/13-5.png",
      title: "Routine Security Audits & Compliance Checks",
      desc: "We conduct regular security audits and compliance reviews to meet rigorous standards like GDPR, HIPAA, and ISO 27001, offering confidence in data protection.",
    },
    {
      id: 6,
      img: "/assets/images/consulting/13-6.png",
      title: "Automated Data Backups & Recovery",
      desc: "Our daily automated backups ensure vital data is safely archived, with recovery mechanisms ready to restore essential information if data loss occurs.",
    },
    {
      id: 7,
      img: "/assets/images/consulting/13-7.png",
      title: "Data Integrity Checks",
      desc: "We run continuous checks to validate data accuracy and consistency, maintaining reliable customer records that support effective decision-making.",
    },
    {
      id: 8,
      img: "/assets/images/consulting/13-8.png",
      title: "Business Continuity & Disaster Recovery Planning",
      desc: "Our continuity plans include disaster recovery to keep CRM systems operational, securing uninterrupted customer service and engagement.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="Your trusted partner in CRM data security"
        img="/assets/images/consulting/hero-13.png"
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
          Our Security Planning
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            We understand that trust and security are paramount in CRM
            solutions. Our CRM application security framework is designed to
            protect your business and customer data across all touchpoints. With
            multi-layered security measures, robust data governance, and
            proactive monitoring, we provide a secure environment for managing
            and growing your relationships.
          </p>
        </div>
      </section>

      <section className="container mx-auto flex justify-center flex-col items-center mt-16">
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
