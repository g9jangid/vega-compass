/* eslint-disable @next/next/no-img-element */
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
import getSEOTags from "@/utils/getSeoTags";

export const metadata = getSEOTags(
  "CRM Consulting Services | Expert CRM Strategy & Solutions – Vegacompass",
  "Transform your business with expert CRM consulting from Vegacompass. We specialize in CRM strategy, implementation, and optimization to enhance customer engagement, streamline operations, and drive growth."
);

export default function Home() {
  const consultancyTiles = menuData.find((item) => item.id === 1).submenu;

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead=""
        title="Transform your business with expert CRM consulting"
        img="/assets/images/consulting.svg"
        bg="#FFF7F0"
      />

      <section className="container mx-auto flex justify-center flex-col items-center mt-16">
        <div className="text-center flex flex-col items-center">
          <p className="ff-lato text-sm text-red uppercase font-semibold tracking-wider">
            Conuslting
          </p>
          <div className="bg-[#F0CCB4] border border-[#F0CCB4] w-14 mt-2"></div>
        </div>
      </section>

      <section className="container mx-auto text-center mt-3 px-6">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-8">
          Our CRM Consultancy Offerings
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center">
          {consultancyTiles.map((item, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/3 self-stretch flex">
              <div className="m-2 self-stretch">
                <Link href={`/consulting${item.path}`} className="flex h-full">
                  <div className="border rounded-md pt-2 py-2 pb-3 text-left service-card">
                    <img
                      src={item.imglink}
                      alt="Vegacompass, Business optimization through CRM domain & Tech knowledge"
                      className="w-full h-72 object-contain p-4"
                    />
                    <h3 className="ff-raleway font-semibold text-2xl text-blackone mt-11 px-8">
                      {item.title}
                    </h3>
                    <p className="text-[#585858] ff-lato mt-4 mb-6 px-8">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Team />
      <TalkToExpert />

      <section className="w-full mx-auto text-center mt-28 testimonial-section">
        <h2 className="ff-raleway text-4xl font-semibold text-blackone mb-12">
          Hear about our work
        </h2>
        <TestimonialSlider />
      </section>

      <VegaCompassInAction />
      <CRMInquiry />
      <Footer />
    </main>
  );
}
