/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import menuData from "./Navigation/menuData";

const Footer = () => {
  const consultancyMenu = menuData.find((item) => item.id === 1);
  const techservicesMenu = menuData.find((item) => item.id === 2);
  const innovationsMenu = menuData.find((item) => item.id === 3);

  return (
    <footer className="p-10 py-16 bg-blackone">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-10 md:mb-0 w-full md:w-1/3 lg:w-1/4">
          <Link href="/">
            <img
              src="/assets/images/logo-v2.svg"
              alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
            />
          </Link>

          <div className="flex space-x-4 mt-8">
            {/* <a href="#" className="text-red-600">
              <img
                src="/assets/images/social/facebook.svg"
                alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              />
            </a> */}
            <a
              target="_blank"
              href="https://www.linkedin.com/company/vegacompass/?viewAsMember=true"
              className="text-red-600 group relative"
            >
              <span
                className="group-hover:opacity-100 transition-opacity bg-white px-1 text-sm text-black rounded-md absolute left-1/2 
    -translate-x-1/2 -translate-y-9 opacity-0 m-4 mx-auto"
              >
                Linkedin
              </span>
              <img
                src="/assets/images/social/linkedin.svg"
                alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              />
            </a>
            <a
              href="https://x.com/vegacompass"
              target="_blank"
              className="text-red-600 group relative"
            >
              <span
                className="group-hover:opacity-100 transition-opacity bg-white px-1 text-sm text-black rounded-md absolute left-1/2 
    -translate-x-1/2 -translate-y-9 opacity-0 m-4 mx-auto"
              >
                Twitter
              </span>
              <img
                src="/assets/images/social/twitter.svg"
                alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              />
            </a>
            <a
              href="https://www.youtube.com/@Vegacompass"
              target="_blank"
              className="text-red-600 group relative"
            >
              <span
                className="group-hover:opacity-100 transition-opacity bg-white px-1 text-sm text-black rounded-md absolute left-1/2 
    -translate-x-1/2 -translate-y-9 opacity-0 m-4 mx-auto"
              >
                YouTube
              </span>
              <img
                src="/assets/images/social/youtube.svg"
                alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
              />
            </a>
          </div>
          <p className="ff-lato text-sm text-white mt-8">
            Address: India/US/Singapore
          </p>
        </div>
        <div className="flex w-full md:w-2/3 lg:w-3/4 flex-wrap">
          <div className="w-full md:1/2 lg:w-1/4 md:px-3 mb-7 lg:mb-0">
            <h3 className="font-semibold ff-lato text-sm text-white mb-4 border-b border-[--border-gray] pb-3">
              CONSULTING
            </h3>
            <ul>
              {consultancyMenu.submenu.map((item, i) => (
                <li key={i} className="ff-lato text-xs text-white mb-4">
                  <Link href={`/consulting${item.path}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:1/2 lg:w-1/4 md:px-3 mb-7 lg:mb-0">
            <h3 className="font-semibold ff-lato text-sm text-white mb-4 border-b border-[--border-gray] pb-3">
              TECH SERVICES
            </h3>
            <ul>
              {techservicesMenu.submenu.map((item, i) => (
                <li key={i} className="ff-lato text-xs text-white mb-4">
                  <Link href={`/tech-services${item.path}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:1/2 lg:w-1/4 md:px-3 mb-7 lg:mb-0">
            <h3 className="font-semibold ff-lato text-sm text-white mb-4 border-b border-[--border-gray] pb-3">
              INNOVATIONS
            </h3>
            <ul>
              {innovationsMenu.submenu.map((item, i) => (
                <li key={i} className="ff-lato text-xs text-white mb-4">
                  <Link href={`/innovations${item.path}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:1/2 lg:w-1/4 md:px-3 mb-7 lg:mb-0">
            <h3 className="font-semibold ff-lato text-sm text-white mb-4 border-b border-[--border-gray] pb-3">
              COMPANY
            </h3>
            <ul>
              <li className="ff-lato text-xs text-white mb-4">
                <Link
                  href="/contact-us"
                  className="ff-lato text-xs text-white mb-4"
                >
                  Contact Us
                </Link>
              </li>
              <li className="ff-lato text-xs text-white mb-4">
                <Link
                  href="/about-us"
                  className="ff-lato text-xs text-white mb-4"
                >
                  About Us
                </Link>
              </li>
              <li className="ff-lato text-xs text-white mb-4">
                <Link
                  href="/our-team"
                  className="ff-lato text-xs text-white mb-4"
                >
                  Our Team
                </Link>
              </li>
              {/* <li className="ff-lato text-xs text-white mb-4">
                <Link
                  href="/case-studies"
                  className="ff-lato text-xs text-white mb-4"
                >
                  Case Studies
                </Link>
              </li> */}
              <li className="ff-lato text-xs text-white mb-4">
                <Link
                  href="https://vegacompass.medium.com/"
                  target="_blank"
                  className="ff-lato text-xs text-white mb-4"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[--border-gray] mt-14 pt-5 flex lg:justify-between justify-center items-center flex-col md:flex-row">
        <p className="ff-lato text-xs text-gray-400 mb-4">
          © 2025 Vegacompass. All rights reserved
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link
            href="/privacy-policy"
            className="ff-lato text-xs text-white mb-4"
          >
            Privacy and Data Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
