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
        title="Excel CRM for growing businesses made simple"
        img="/assets/images/innovations/crm-excel.png"
        bg="#F8F0FF"
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
          Excel CRM – Atom
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            Looking for a straightforward and affordable way to manage your
            customer relationships? At VegaCompass, we have created Atom, a
            Excel-Based CRM solution designed specifically for your sales team.
            Perfect for small and medium-sized businesses, Atom offers all the
            essential features you need to manage your leads, track sales, and
            nurture customer relationships without the complexity or cost of
            more advanced CRM platforms.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 flex flex-col lg:flex-row mt-28">
        <div className="w-full lg:w-1/2 pr-8">
          <div className="text-left flex flex-col items-start">
            <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
              SOLUTIONS
            </p>
            <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
          </div>
          <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-4 mt-5">
            Why choose Atom
          </h2>
          <p className="ff-lato text-blackone mb-8">
            Not every business needs a full-scale, cloud-based CRM solution. For
            companies looking for simplicity, flexibility, and
            cost-effectiveness, Excel provides the perfect platform for managing
            customer interactions, tracking deals, and improving sales
            performance. With our custom Atom CRM templates and solutions, you
            can
          </p>
          <p className="text-[#376CF5] ff-lato mb-3">
            Download the Atom - A full excel based Sales CRM free!
          </p>
          <Link
            href="/case-studies"
            className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
          >
            Download Now
          </Link>

          <div className="mt-8 flex flex-wrap">
            <div className="w-1/2 mb-4 px-3">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="25" height="25" fill="white" />
                <path
                  d="M12.5 12.5C15.9518 12.5 18.75 9.70178 18.75 6.25C18.75 2.79822 15.9518 0 12.5 0C9.04822 0 6.25 2.79822 6.25 6.25C6.25 9.70178 9.04822 12.5 12.5 12.5Z"
                  fill="#BD90F4"
                />
                <path
                  d="M12.5 14.5834C7.32471 14.5891 3.13076 18.7831 3.125 23.9584C3.125 24.5337 3.59136 25 4.16665 25H20.8333C21.4086 25 21.875 24.5337 21.875 23.9584C21.8692 18.7831 17.6753 14.5891 12.5 14.5834Z"
                  fill="#BD90F4"
                />
              </svg>

              <p className="ff-lato text-blackone text-sm pt-3">
                Manage leads and contacts with ease
              </p>
            </div>

            <div className="w-1/2 mb-4 px-3">
              <svg
                width="31"
                height="19"
                viewBox="0 0 31 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5534 18.3353C16.4739 18.3353 17.2201 17.5891 17.2201 16.6686C17.2201 15.7481 16.4739 15.002 15.5534 15.002C14.6329 15.002 13.8867 15.7481 13.8867 16.6686C13.8867 17.5891 14.6329 18.3353 15.5534 18.3353Z"
                  fill="#BD90F4"
                />
                <path
                  d="M17.5 14.6886C17.9678 15.1475 18.2628 15.7725 18.3139 16.4652C21.0056 14.9658 24.6989 12.7702 27.3656 11.1747C22.9806 12.6797 19.7361 13.8358 17.5 14.6886Z"
                  fill="#BD90F4"
                />
                <path
                  d="M15.0015 7.25246V0.571899C11.1315 0.708566 7.61762 2.26412 4.96484 4.73579L9.68595 9.4569C11.1232 8.18801 12.9693 7.37912 15.0015 7.25246Z"
                  fill="#BD90F4"
                />
                <path
                  d="M6.66667 16.1131C6.66667 13.862 7.51444 11.8098 8.89889 10.242L4.17778 5.52087C1.58833 8.30032 0 12.0237 0 16.1131H6.66667Z"
                  fill="#BD90F4"
                />
                <path
                  d="M16.1094 0.571411V7.24308C18.1022 7.36752 19.966 8.15919 21.4299 9.45141L26.146 4.7353C23.4933 2.26419 19.9799 0.708633 16.1094 0.571411Z"
                  fill="#BD90F4"
                />
                <path
                  d="M22.2148 10.2381C22.5498 10.6181 22.8548 11.0281 23.1248 11.4676C24.306 11.0531 25.596 10.6059 27.0076 10.1209C27.5587 9.93089 28.1304 10.1764 28.3748 10.6981C28.6198 11.2231 28.436 11.8237 27.9365 12.1264C26.8376 12.7842 25.5637 13.5437 24.2576 14.3142C24.3787 14.902 24.4437 15.5042 24.4437 16.112H31.1104C31.1104 12.0226 29.5221 8.29922 26.9326 5.51978L22.2154 10.237L22.2148 10.2381Z"
                  fill="#BD90F4"
                />
              </svg>

              <p className="ff-lato text-blackone text-sm pt-3">
                Track sales pipelines and monitor progress.
              </p>
            </div>

            <div className="w-1/2 mb-4 px-3">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_963_6075)">
                  <rect width="25" height="25" fill="white" />
                  <path
                    d="M16.6667 0.3125C17.4019 0.56456 18.0709 0.978983 18.624 1.525L20.349 3.25208C20.8956 3.80447 21.3105 4.47319 21.5625 5.20833H16.6667V0.3125ZM21.875 7.29167V19.7917C21.8733 21.1725 21.3241 22.4963 20.3477 23.4727C19.3713 24.4491 18.0475 24.9983 16.6667 25H8.33333C6.95251 24.9983 5.62871 24.4491 4.65231 23.4727C3.67592 22.4963 3.12665 21.1725 3.125 19.7917V5.20833C3.12665 3.82751 3.67592 2.50371 4.65231 1.52731C5.62871 0.550919 6.95251 0.00165402 8.33333 0L14.5833 0V5.20833C14.5833 5.76087 14.8028 6.29077 15.1935 6.68147C15.5842 7.07217 16.1141 7.29167 16.6667 7.29167H21.875ZM17.5083 18.1385C17.428 18.0273 17.3264 17.9331 17.2095 17.8613C17.0927 17.7894 16.9627 17.7414 16.8272 17.7199C16.6917 17.6984 16.5533 17.7039 16.4199 17.7361C16.2865 17.7682 16.1608 17.8264 16.05 17.9073C15.3501 18.3945 14.5326 18.6855 13.6823 18.75C13.3491 18.7409 13.0301 18.6135 12.7823 18.3906C12.2387 17.9593 11.5678 17.7194 10.874 17.7083C9.71841 17.817 8.61777 18.2527 7.70104 18.9646C7.58727 19.0457 7.49098 19.1489 7.41789 19.2679C7.34481 19.387 7.29643 19.5196 7.27564 19.6578C7.25484 19.7959 7.26205 19.9369 7.29684 20.0722C7.33164 20.2075 7.3933 20.3344 7.47816 20.4454C7.56301 20.5564 7.66934 20.6492 7.79079 20.7183C7.91225 20.7874 8.04636 20.8313 8.18514 20.8475C8.32393 20.8636 8.46455 20.8517 8.59863 20.8124C8.73271 20.7731 8.85752 20.7073 8.96563 20.6187C9.52043 20.1842 10.1775 19.8994 10.874 19.7917C11.1302 19.7917 11.2604 19.8729 11.6031 20.1042C12.1967 20.573 12.9301 20.8297 13.6865 20.8333C14.981 20.7742 16.2311 20.3427 17.2865 19.5906C17.5078 19.427 17.6553 19.1824 17.6969 18.9103C17.7385 18.6383 17.6707 18.3608 17.5083 18.1385ZM17.7083 14.5833C17.7083 14.3071 17.5986 14.0421 17.4032 13.8468C17.2079 13.6514 16.9429 13.5417 16.6667 13.5417H8.33333C8.05707 13.5417 7.79211 13.6514 7.59676 13.8468C7.40141 14.0421 7.29167 14.3071 7.29167 14.5833C7.29167 14.8596 7.40141 15.1246 7.59676 15.3199C7.79211 15.5153 8.05707 15.625 8.33333 15.625H16.6667C16.9429 15.625 17.2079 15.5153 17.4032 15.3199C17.5986 15.1246 17.7083 14.8596 17.7083 14.5833ZM17.7083 10.4167C17.7083 10.1404 17.5986 9.87545 17.4032 9.6801C17.2079 9.48475 16.9429 9.375 16.6667 9.375H8.33333C8.05707 9.375 7.79211 9.48475 7.59676 9.6801C7.40141 9.87545 7.29167 10.1404 7.29167 10.4167C7.29167 10.6929 7.40141 10.9579 7.59676 11.1532C7.79211 11.3486 8.05707 11.4583 8.33333 11.4583H16.6667C16.9429 11.4583 17.2079 11.3486 17.4032 11.1532C17.5986 10.9579 17.7083 10.6929 17.7083 10.4167Z"
                    fill="#BD90F4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_963_6075">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="ff-lato text-blackone text-sm pt-3">
                Generate reports for sales performance and team efficiency.
              </p>
            </div>

            <div className="w-1/2 mb-4 px-3">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_963_6080)">
                  <path
                    d="M1.67102 18.75C2.53265 20.2454 4.44344 20.7592 5.93885 19.8976C5.93987 19.897 5.94085 19.8964 5.94187 19.8958L6.4054 19.6281C7.2804 20.3767 8.28616 20.9573 9.37205 21.3406V21.875C9.37205 23.6009 10.7712 25 12.497 25C14.2229 25 15.622 23.6009 15.622 21.875V21.3406C16.7081 20.9567 17.7139 20.3754 18.5887 19.626L19.0543 19.8948C20.5501 20.7577 22.4622 20.2447 23.3252 18.7489C24.1881 17.2532 23.6751 15.341 22.1793 14.4781L21.7168 14.2114C21.925 13.0786 21.925 11.9172 21.7168 10.7843L22.1793 10.5177C23.6751 9.65474 24.1881 7.74263 23.3252 6.24683C22.4622 4.75107 20.5501 4.23804 19.0543 5.10098L18.5908 5.3687C17.7149 4.621 16.7085 4.0415 15.622 3.65937V3.125C15.622 1.39912 14.2229 0 12.497 0C10.7712 0 9.37205 1.39912 9.37205 3.125V3.65937C8.28601 4.04331 7.2802 4.62456 6.4054 5.37397L5.93977 5.1042C4.44397 4.24121 2.53186 4.75425 1.66893 6.25C0.805986 7.74575 1.31897 9.65791 2.81477 10.5208L3.27727 10.7875C3.06907 11.9204 3.06907 13.0817 3.27727 14.2146L2.81477 14.4812C1.32312 15.3465 0.811796 17.2549 1.67102 18.75ZM12.497 8.33335C14.7982 8.33335 16.6637 10.1988 16.6637 12.5C16.6637 14.8012 14.7982 16.6667 12.497 16.6667C10.1959 16.6667 8.3304 14.8012 8.3304 12.5C8.3304 10.1988 10.1959 8.33335 12.497 8.33335Z"
                    fill="#BD90F4"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_963_6080">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="ff-lato text-blackone text-sm pt-3">
                Customize workflows to match your sales processes.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex mt-10 lg:mt-0">
          <img
            src="/assets/images/innovations/why-atom.png"
            className="p-6"
            alt=""
          />
        </div>
      </section>

      <Team />
      <TalkToExpert />

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
