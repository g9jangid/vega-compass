/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import caseStudiesData from "@/constants/case-studies.json";
import { usePathname } from "next/navigation";

const CaseStudiesSlides = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments.pop();

  const _caseStudyData = caseStudiesData.filter(
    (item) => item.service_slug === lastSegment
  );

  const caseStudyData = _caseStudyData.map((item) => ({
    img: "/assets/images/case-studies/" + item.img,
    title: item.title,
    desc: item.brief,
    link: "/case-studies/" + item.url,
  }));
  return !!caseStudyData.length ? (
    <section className="container mx-auto px-6 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 pr-8">
        <div className="text-left flex flex-col items-start">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            case studies
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-4 mt-5">
          Our success stories
        </h2>
        <p className="ff-lato text-blackone mb-8">
          Real stories, real success. Learn how we’ve helped businesses like
          yours grow and connect better with their customers. Our case studies
          highlight real CRM strategies that drive results and improve
          experiences
        </p>
        <Link
          href="/case-studies"
          className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border bg-red py-2 px-8 text-white transition duration-300"
        >
          View all case studies
        </Link>
      </div>
      <div className="w-full lg:w-1/2 flex mt-10 lg:mt-0">
        <div className="case-studeis-slider">
          <Swiper
            spaceBetween={16}
            slidesPerView={"auto"}
            loop={false}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="!pb-32"
          >
            {caseStudyData.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-lg p-6 border border-[#ECECED] w-80 h-[520px] overflow-hidden">
                  <img
                    alt=""
                    className="rounded-lg mb-4 case-study-slide-img"
                    src={item.img}
                  />
                  <h2 className="text-lg font-medium mb-2 ff-raleway text-blackone line-clamp-4">
                    {item.title}
                  </h2>
                  <p className="ff-lato text-blackone text-sm my-4 line-clamp-4">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    className="text-base capitalize mt-2 inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  ) : null;
};

export default CaseStudiesSlides;
