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
      img: "/assets/images/consulting/9-1.png",
      title: "Seamless Integration",
      desc: "Our CRM unifies your e-commerce tools, like Shopify and Magento, centralizing customer data, orders, and inventory management in one place.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/9-2.png",
      title: "Personalized Customer Engagement",
      desc: "Our CRM unifies your e-commerce tools, like Shopify and Magento, centralizing customer data, orders, and inventory management in one place.",
    },
    {
      id: 3,
      img: "/assets/images/consulting/9-3.png",
      title: "Efficient Order & Inventory Management",
      desc: "Streamline your entire order process from purchase to fulfillment. Our CRM tracks orders in real-time, manages stock levels, and provides automated alerts to ensure you’re always prepared to meet demand.",
    },
    {
      id: 4,
      img: "/assets/images/consulting/9-4.png",
      title: "Comprehensive Customer Support",
      desc: "Deliver excellent service with automated case management and a 360° view of customer journeys, helping your team resolve issues swiftly.",
    },
    {
      id: 5,
      img: "/assets/images/consulting/9-5.png",
      title: "Data-Driven Insights",
      desc: "Access deep analytics on sales trends, customer behaviour, and campaign success to make revenue-driving decisions.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="CRM  solutions for e-commerce growth and customer connections"
        img="/assets/images/consulting/hero-9.png"
        bg="#F3FFFF"
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
          Our CRM E-Commerce
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            Our tailored CRM solutions empower e-commerce businesses to
            streamline operations, personalize customer interactions, and drive
            growth. From order management to customer service, our CRM system
            provides end-to-end support for every stage of your business.
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

      <section className="container mx-auto px-6 flex flex-col mt-24">
        <div>
          <div className="text-left flex flex-col items-start">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              case studies
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-4 mt-4">
            Our top CRM features for e-commerce
          </h2>
        </div>
        <div className="w-full flex flex-col lg:flex-row">
          <div className="pt-4 lg:pr-2">
            <div className="border border-[#E5CEFC] rounded-xl p-5 mb-4 flex">
              <span className="mt-1">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_620_1143)">
                    <rect width="25" height="25" fill="white" />
                    <path
                      d="M7.8125 13.5417C6.8854 13.5417 5.97912 13.2668 5.20826 12.7517C4.43741 12.2366 3.8366 11.5045 3.48181 10.648C3.12703 9.79147 3.0342 8.84897 3.21507 7.93968C3.39594 7.0304 3.84238 6.19516 4.49794 5.53961C5.1535 4.88405 5.98873 4.43761 6.89801 4.25674C7.8073 4.07587 8.7498 4.1687 9.60633 4.52348C10.4629 4.87827 11.1949 5.47908 11.71 6.24993C12.2251 7.02079 12.5 7.92707 12.5 8.85417C12.4986 10.0969 12.0043 11.2884 11.1255 12.1672C10.2468 13.046 9.05528 13.5403 7.8125 13.5417ZM14.5833 25H1.04167C0.765399 25 0.500448 24.8903 0.305097 24.6949C0.109747 24.4996 0 24.2346 0 23.9583V23.4375C0 21.3655 0.8231 19.3784 2.28823 17.9132C3.75336 16.4481 5.7405 15.625 7.8125 15.625C9.8845 15.625 11.8716 16.4481 13.3368 17.9132C14.8019 19.3784 15.625 21.3655 15.625 23.4375V23.9583C15.625 24.2346 15.5153 24.4996 15.3199 24.6949C15.1246 24.8903 14.8596 25 14.5833 25ZM18.2292 9.375C17.3021 9.375 16.3958 9.10009 15.6249 8.58502C14.8541 8.06995 14.2533 7.33786 13.8985 6.48133C13.5437 5.6248 13.4509 4.6823 13.6317 3.77302C13.8126 2.86373 14.259 2.0285 14.9146 1.37294C15.5702 0.717381 16.4054 0.270939 17.3147 0.0900711C18.224 -0.0907971 19.1665 0.00203103 20.023 0.356817C20.8795 0.711603 21.6116 1.31241 22.1267 2.08327C22.6417 2.85412 22.9167 3.7604 22.9167 4.6875C22.9153 5.93028 22.421 7.12176 21.5422 8.00054C20.6634 8.87932 19.4719 9.37362 18.2292 9.375ZM16.749 11.4802C15.7788 11.6104 14.8459 11.9395 14.0089 12.4469C13.1718 12.9544 12.4485 13.6292 11.8844 14.4292C14.2186 15.4892 16.0527 17.4107 17.0031 19.7917H23.9583C24.2346 19.7917 24.4996 19.6819 24.6949 19.4866C24.8903 19.2912 25 19.0263 25 18.75V18.7104C24.9989 17.6721 24.7764 16.6459 24.3471 15.7005C23.9179 14.755 23.292 13.912 22.5111 13.2277C21.7301 12.5434 20.8122 12.0335 19.8186 11.7322C18.8249 11.4308 17.7784 11.3449 16.749 11.4802Z"
                      fill="#BD90F4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_620_1143">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <div className="flex-1 pl-4">
                <p className="ff-raleway font-semibold text-lg text-blackone mb-1">
                  Unified Customer Profiles
                </p>
                <span className="ff-lato text-sm text-[#585858]">
                  Get a complete view of every customer interaction, purchase
                  history, and preferences.
                </span>
              </div>
            </div>

            <div className="border border-[#E5CEFC] rounded-xl p-5 mb-4 flex">
              <span className="mt-1">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8333 8.33333C18.5312 8.33333 16.6667 6.46875 16.6667 4.16667C16.6667 1.86458 18.5312 0 20.8333 0C23.1354 0 25 1.86458 25 4.16667C25 6.46875 23.1354 8.33333 20.8333 8.33333ZM12.5 16.0625C13.3021 16.0625 14.1042 15.7604 14.7083 15.1458L19.5729 10.2812C16.7292 9.69792 14.5833 7.17708 14.5833 4.15625C14.5833 3.80208 14.625 3.45833 14.6771 3.11458H5.20833C3.32292 3.11458 1.6875 4.125 0.770833 5.625L10.2917 15.1562C10.8958 15.7604 11.6979 16.0729 12.5 16.0729V16.0625ZM22.6667 10.1354L16.1771 16.625C15.1667 17.6354 13.8229 18.1458 12.4896 18.1458C11.1562 18.1458 9.82292 17.6354 8.80208 16.625L0.0520833 7.85417C0.0416667 8.01042 0 8.16667 0 8.33333V19.7917C0 22.6667 2.33333 25 5.20833 25H19.7917C22.6667 25 25 22.6667 25 19.7917L24.9792 8.82292C24.3125 9.41667 23.5312 9.86458 22.6667 10.1354Z"
                    fill="#BD90F4"
                  />
                </svg>
              </span>
              <div className="flex-1 pl-4">
                <p className="ff-raleway font-semibold text-lg text-blackone mb-1">
                  Multi-Channel Marketing Automation
                </p>
                <span className="ff-lato text-sm text-[#585858]">
                  Easily launch email, SMS, and social media campaigns that are
                  tailored to each customer.
                </span>
              </div>
            </div>

            <div className="border border-[#E5CEFC] rounded-xl p-5 mb-4 flex">
              <span className="mt-1">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_620_1130)">
                    <rect width="25" height="25" fill="white" />
                    <path
                      d="M23.4375 21.875H5.72917C5.0385 21.875 4.37612 21.6006 3.88774 21.1123C3.39937 20.6239 3.125 19.9615 3.125 19.2708V1.5625C3.125 1.1481 2.96038 0.750671 2.66735 0.457646C2.37433 0.16462 1.9769 0 1.5625 0C1.1481 0 0.750671 0.16462 0.457646 0.457646C0.16462 0.750671 0 1.1481 0 1.5625L0 19.2708C0.00165434 20.7898 0.605793 22.2461 1.67986 23.3201C2.75393 24.3942 4.21021 24.9983 5.72917 25H23.4375C23.8519 25 24.2493 24.8354 24.5424 24.5424C24.8354 24.2493 25 23.8519 25 23.4375C25 23.0231 24.8354 22.6257 24.5424 22.3326C24.2493 22.0396 23.8519 21.875 23.4375 21.875Z"
                      fill="#BD90F4"
                    />
                    <path
                      d="M23.438 4.1416H20.2234C20.0174 4.14165 19.816 4.20276 19.6448 4.31722C19.4735 4.43169 19.34 4.59436 19.2612 4.78467C19.1824 4.97498 19.1618 5.18439 19.2019 5.38643C19.2421 5.58846 19.3413 5.77405 19.4869 5.91973L20.2505 6.68223L16.514 10.4166C16.4656 10.4651 16.4081 10.5036 16.3449 10.5298C16.2816 10.5561 16.2137 10.5696 16.1452 10.5696C16.0767 10.5696 16.0089 10.5561 15.9456 10.5298C15.8823 10.5036 15.8249 10.4651 15.7765 10.4166L15.5994 10.2395C14.905 9.57615 13.9816 9.20598 13.0213 9.20598C12.0609 9.20598 11.1376 9.57615 10.4432 10.2395L6.17233 14.5104C6.02309 14.6545 5.90406 14.8269 5.82217 15.0175C5.74028 15.2082 5.69717 15.4132 5.69537 15.6207C5.69357 15.8281 5.7331 16.0339 5.81167 16.2259C5.89023 16.4179 6.00625 16.5924 6.15296 16.7391C6.29967 16.8858 6.47412 17.0018 6.66615 17.0804C6.85817 17.1589 7.06392 17.1985 7.27139 17.1967C7.47886 17.1949 7.68389 17.1518 7.87452 17.0699C8.06515 16.988 8.23756 16.869 8.3817 16.7197L12.6525 12.4489C12.7009 12.4004 12.7584 12.3619 12.8217 12.3357C12.8849 12.3094 12.9528 12.2959 13.0213 12.2959C13.0898 12.2959 13.1576 12.3094 13.2209 12.3357C13.2842 12.3619 13.3417 12.4004 13.39 12.4489L13.5671 12.626C14.2618 13.2889 15.1851 13.6587 16.1452 13.6587C17.1054 13.6587 18.0287 13.2889 18.7234 12.626L22.4588 8.8916L23.2213 9.65514C23.3669 9.80114 23.5526 9.90062 23.7548 9.941C23.957 9.98138 24.1667 9.96084 24.3572 9.88197C24.5477 9.80311 24.7105 9.66947 24.8251 9.49799C24.9396 9.3265 25.0006 9.12489 25.0005 8.91868V5.7041C25.0005 5.2897 24.8358 4.89227 24.5428 4.59925C24.2498 4.30622 23.8524 4.1416 23.438 4.1416Z"
                      fill="#BD90F4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_620_1130">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <div className="flex-1 pl-4">
                <p className="ff-raleway font-semibold text-lg text-blackone mb-1">
                  Order Management Automation
                </p>
                <span className="ff-lato text-sm text-[#585858]">
                  Manage orders, track inventory, and process returns seamlessly
                  with automated workflows.
                </span>
              </div>
            </div>
          </div>
          <div className="pt-4 lg:pl-2">
            <div className="border border-[#E5CEFC] rounded-xl p-5 mb-4 flex">
              <span className="mt-1">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.08333 15.625H11.4583V25H7.29167C5.91033 25 4.58557 24.4513 3.60882 23.4745C2.63207 22.4978 2.08333 21.173 2.08333 19.7917V15.625ZM25 11.4583C25 12.0109 24.7805 12.5408 24.3898 12.9315C23.9991 13.3222 23.4692 13.5417 22.9167 13.5417H13.5417V9.33021C13.1917 9.35729 12.8427 9.375 12.5 9.375C12.1573 9.375 11.8083 9.35729 11.4583 9.33021V13.5417H2.08333C1.5308 13.5417 1.0009 13.3222 0.610194 12.9315C0.219493 12.5408 0 12.0109 0 11.4583C0 10.3533 0.438987 9.29346 1.22039 8.51205C2.00179 7.73065 3.0616 7.29167 4.16667 7.29167H5.97708C5.38812 6.7725 4.92062 6.13008 4.60775 5.41C4.29487 4.68991 4.14428 3.9098 4.16667 3.125C4.16667 2.84873 4.27641 2.58378 4.47176 2.38843C4.66711 2.19308 4.93207 2.08333 5.20833 2.08333C5.4846 2.08333 5.74955 2.19308 5.9449 2.38843C6.14025 2.58378 6.25 2.84873 6.25 3.125C6.25 5.85625 8.71979 6.80208 10.5979 7.12604C9.90471 5.89693 9.4874 4.53163 9.375 3.125C9.375 2.2962 9.70424 1.50134 10.2903 0.915291C10.8763 0.32924 11.6712 0 12.5 0C13.3288 0 14.1237 0.32924 14.7097 0.915291C15.2958 1.50134 15.625 2.2962 15.625 3.125C15.5126 4.53163 15.0953 5.89693 14.4021 7.12604C16.2802 6.80208 18.75 5.85625 18.75 3.125C18.75 2.84873 18.8597 2.58378 19.0551 2.38843C19.2504 2.19308 19.5154 2.08333 19.7917 2.08333C20.0679 2.08333 20.3329 2.19308 20.5282 2.38843C20.7236 2.58378 20.8333 2.84873 20.8333 3.125C20.8557 3.9098 20.7051 4.68991 20.3923 5.41C20.0794 6.13008 19.6119 6.7725 19.0229 7.29167H20.8333C21.9384 7.29167 22.9982 7.73065 23.7796 8.51205C24.561 9.29346 25 10.3533 25 11.4583ZM11.4583 3.125C11.5841 4.23211 11.9388 5.30095 12.5 6.26354C13.0612 5.30095 13.4159 4.23211 13.5417 3.125C13.5417 2.84873 13.4319 2.58378 13.2366 2.38843C13.0412 2.19308 12.7763 2.08333 12.5 2.08333C12.2237 2.08333 11.9588 2.19308 11.7634 2.38843C11.5681 2.58378 11.4583 2.84873 11.4583 3.125ZM13.5417 25H17.7083C18.3923 25 19.0696 24.8653 19.7015 24.6035C20.3334 24.3418 20.9075 23.9582 21.3912 23.4745C21.8748 22.9909 22.2585 22.4167 22.5202 21.7848C22.7819 21.1529 22.9167 20.4756 22.9167 19.7917V15.625H13.5417V25Z"
                    fill="#BD90F4"
                  />
                </svg>
              </span>
              <div className="flex-1 pl-4">
                <p className="ff-raleway font-semibold text-lg text-blackone mb-1">
                  Loyalty & Rewards Programs
                </p>
                <span className="ff-lato text-sm text-[#585858]">
                  Build and manage loyalty programs to foster long-term customer
                  relationships.
                </span>
              </div>
            </div>

            <div className="border border-[#E5CEFC] rounded-xl p-5 mb-4 flex">
              <span className="mt-1">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_620_1133)">
                    <rect width="25" height="25" fill="white" />
                    <path
                      d="M12.5 6.25C11.6712 6.25 10.8763 6.57924 10.2903 7.16529C9.70424 7.75134 9.375 8.5462 9.375 9.375V21.875C9.375 22.7038 9.70424 23.4987 10.2903 24.0847C10.8763 24.6708 11.6712 25 12.5 25C13.3288 25 14.1237 24.6708 14.7097 24.0847C15.2958 23.4987 15.625 22.7038 15.625 21.875V9.375C15.625 8.5462 15.2958 7.75134 14.7097 7.16529C14.1237 6.57924 13.3288 6.25 12.5 6.25Z"
                      fill="#BD90F4"
                    />
                    <path
                      d="M21.875 0C21.0462 0 20.2513 0.32924 19.6653 0.915291C19.0792 1.50134 18.75 2.2962 18.75 3.125V21.875C18.75 22.7038 19.0792 23.4987 19.6653 24.0847C20.2513 24.6708 21.0462 25 21.875 25C22.7038 25 23.4987 24.6708 24.0847 24.0847C24.6708 23.4987 25 22.7038 25 21.875V3.125C25 2.2962 24.6708 1.50134 24.0847 0.915291C23.4987 0.32924 22.7038 0 21.875 0Z"
                      fill="#BD90F4"
                    />
                    <path
                      d="M3.125 12.5C2.2962 12.5 1.50134 12.8292 0.915291 13.4153C0.32924 14.0013 0 14.7962 0 15.625L0 21.875C0 22.7038 0.32924 23.4987 0.915291 24.0847C1.50134 24.6708 2.2962 25 3.125 25C3.9538 25 4.74866 24.6708 5.33471 24.0847C5.92076 23.4987 6.25 22.7038 6.25 21.875V15.625C6.25 14.7962 5.92076 14.0013 5.33471 13.4153C4.74866 12.8292 3.9538 12.5 3.125 12.5Z"
                      fill="#BD90F4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_620_1133">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <div className="flex-1 pl-4">
                <p className="ff-raleway font-semibold text-lg text-blackone mb-1">
                  Real-Time Reporting & Analytics
                </p>
                <span className="ff-lato text-sm text-[#585858]">
                  Monitor KPIs, track performance metrics, and access actionable
                  insights instantly.
                </span>
              </div>
            </div>

            <div className="border border-[#E5CEFC] rounded-xl p-5 mb-4 flex">
              <span className="mt-1">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.9521 11.4521C22.9583 10.1958 22.4812 8.67918 20.274 8.27502C20.1594 8.05627 20.0333 7.83647 19.8948 7.61564C21.0073 6.07502 20.9219 4.64585 19.6365 3.36043C18.35 2.07293 16.9208 1.98856 15.3792 3.10522C15.1615 2.96772 14.9437 2.84272 14.726 2.73022C14.3281 0.530225 12.826 0.0427246 11.5729 0.0427246C9.81562 0.0427246 8.68645 0.97085 8.35833 2.77606C8.14166 2.8896 7.92291 3.01564 7.70312 3.15314C6.16874 2.04481 4.73854 2.1396 3.43958 3.43647C2.14479 4.73231 2.05104 6.16356 3.15624 7.69793C3.0177 7.91877 2.89062 8.13856 2.775 8.35731C0.973954 8.68647 0.0572868 9.75835 0.0479118 11.5479C0.0416618 12.8042 0.518745 14.3208 2.72604 14.725C2.84062 14.9438 2.96666 15.1636 3.10625 15.3844C1.9927 16.925 2.07812 18.3542 3.36354 19.6396C4.65 20.9271 6.0802 21.0115 7.62083 19.8948C7.83854 20.0323 8.05624 20.1573 8.27395 20.2698C8.67187 22.4698 10.174 22.9573 11.4271 22.9573C13.2865 22.9573 14.3135 22.0292 14.6417 20.224C14.8583 20.1104 15.0771 19.9844 15.2969 19.8469C17.7458 21.6896 19.5594 19.5636 19.5604 19.5636C20.825 18.3667 20.95 16.8365 19.8437 15.3011C19.9823 15.0802 20.1094 14.8604 20.225 14.6427C22.026 14.3136 22.9427 13.2417 22.9521 11.4521ZM14.0646 14.0646C13.2135 14.9167 12.4052 15.3917 11.2833 15.325C10.225 15.2615 9.43645 14.5667 8.93541 14.0646C7.23333 12.3636 7.23333 10.6365 8.93541 8.93439C9.85416 8.01356 10.7625 7.59481 11.7167 7.67502C12.774 7.75627 13.5635 8.43335 14.0646 8.93543C15.7656 10.6365 15.7667 12.3636 14.0646 14.0656V14.0646Z"
                    fill="#BD90F4"
                  />
                </svg>
              </span>
              <div className="flex-1 pl-4">
                <p className="ff-raleway font-semibold text-lg text-blackone mb-1">
                  Scalable Solutions for Growth
                </p>
                <span className="ff-lato text-sm text-[#585858]">
                  Our CRM scales with your business, ready to accommodate
                  high-volume sales events and expansion.
                </span>
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
