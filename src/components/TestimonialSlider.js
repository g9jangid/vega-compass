/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  const items = [
    {
      name: "Teddy Yip",
      subhead: "Head of Services, DSG Group",
      message: `"We struggled with volunteer data management until we partnered with Charu and team. Their CRM solution, data approach, support management optimized through Salesforce streamlined our processes and helped us manage our non profit efficiently. We've seen a 35% increase in volunteer retention and management!"`,
    },
    {
      name: "Annie Hong",
      subhead: "VP, Customer Support, FlexTrade Solutions",
      message: `"Implementing the new CRM system for case management and managing its support through Charu and team has transformed our customer support. Based on the work, automation, and user training, our response times have improved by 40%, and we have a clear view of customer interactions. Highly recommended!"`,
    },
    {
      name: "Chaitanya P",
      subhead: "Operations Head,  MaxxTrader - A Singapore Exchange firm",
      message: `“With our previous CRM, we faced issues with data integration and reporting. Thutech (Now VegaCompass) team provided a seamless solution that helped us automate workflows and improve communication between departments for effective operations and sync between departments. Fantastic service!”`,
    },
    {
      name: "Mr. Kiyani",
      subhead: "Head Tabernacle Group, Tabernacle Health Group",
      message: `“The technical and consulting team helped manage our healthcare program operations through mobile application seamlessly. The functionality was built to help setup end to end health program system management with data guidelines. A dedicated app to help streamline entire operations proved wonders.”`,
    },
    {
      name: "Mr. Mulla",
      subhead: "CEO, Emmar Energy",
      message: `"Thanks to this team, our team can now manage client relationships with ease. The CRM is intuitive, and their support team is always available to assist. We've saved countless hours in manual data entry!"`,
    },
  ];
  return (
    <div className="testimonial-slider bg-[--off-red2] px-6 lg:px-20">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
        }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full pt-10 lg:pt-14 pb-36 flex flex-col lg:flex-row items-start">
              <div className="w-full lg:p-4 text-left">
                <div className="bg-white rounded-2xl shadow-md p-7">
                  <h4 className="ff-raleway font-semibold text-xl text-blackone">
                    {item.name}
                  </h4>
                  <p className="ff-lato text-[#585858]">{item.subhead}</p>
                  <div className="w-full pl-6 pt-5 pb-5">
                    <p className="border-l border-[#DCDCE3] pl-7 ff-lato italic text-blackone">
                      {item.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
