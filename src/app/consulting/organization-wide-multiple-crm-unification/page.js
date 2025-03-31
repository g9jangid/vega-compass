/* eslint-disable @next/next/no-img-element */
import Navigation from "@/components/Navigation/Navigation";
import Team from "@/components/Team";
import TestimonialSlider from "@/components/TestimonialSlider";
import TalkToExpert from "@/components/TalkToExpert";
import VegaCompassInAction from "@/components/VegaCompassInAction";
import CRMInquiry from "@/components/CRMInquiry";
import Footer from "@/components/Footer";
import HeroOne from "@/components/HeroOne";
import CaseStudiesSlides from "@/components/CaseStudiesSlides";
import getSEOTags from "@/utils/getSeoTags";

export const metadata = getSEOTags(
  "Organization-wide CRM Unification | Centralize Your CRM Systems",
  "Unify multiple CRM systems to centralize data, improve efficiency, and enhance cross-team collaboration."
);

export default function Home() {
  const tiles = [
    {
      id: 1,
      img: "/assets/images/consulting/12-1.png",
      title: "Comprehensive CRM Assessment",
      desc: "We start with a full audit of your CRM platforms, analyzing workflows and data structures to create a unified, optimized system that supports all key functions.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/12-2.png",
      title: "CRM Consolidation & Migration Planning",
      desc: "Our team plans and executes a seamless CRM consolidation, ensuring data integrity and minimal downtime for smooth, efficient transitions.",
    },
    {
      id: 3,
      img: "/assets/images/consulting/12-3.png",
      title: "Data Deduplication & Cleanup",
      desc: "We remove duplicates and inconsistencies, building your unified CRM on clean, reliable data for accurate reporting and decision-making..",
    },
    {
      id: 4,
      img: "/assets/images/consulting/12-4.png",
      title: "Integration of Existing Systems & Tools",
      desc: "We connect your CRM with ERP, marketing, and support tools to enable a holistic view of customer interactions and efficient cross-departmental workflows.",
    },
    {
      id: 5,
      img: "/assets/images/consulting/12-5.png",
      title: "Customization & Workflow Alignment",
      desc: "Our custom workflows support unique departmental needs, streamlining operations across sales, marketing, service, and finance teams.",
    },
    {
      id: 6,
      img: "/assets/images/consulting/12-6.png",
      title: "User Training & Change Management",
      desc: "We guide your team through CRM unification with tailored training and change management, ensuring smooth adoption organization-wide.",
    },
    {
      id: 7,
      img: "/assets/images/consulting/12-7.png",
      title: "Ongoing Support & Optimization",
      desc: "We provide continuous support, maintenance, and fine-tuning to adapt your CRM as your business evolves, ensuring long-term value.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="Seamless CRM unification for better efficiency and insights"
        img="/assets/images/consulting/hero-12.png"
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
          Our CRM System Migration
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            Managing multiple CRM systems can lead to fragmented customer data,
            duplication of effort, and disconnected teams. Unifying your CRM
            systems across your organization solves these challenges by
            centralizing customer information, streamlining processes, and
            improving collaboration between departments and business units,
            regions. Our CRM unification services ensure that your business
            operates with greater efficiency, transparency, and alignment.{" "}
            <br />
            With a unified CRM, your organization can operate more efficiently,
            improve customer interactions, and make data-driven decisions based
            on a single source of truth.
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
