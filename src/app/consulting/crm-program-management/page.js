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
  "CRM Program Management | Optimize CRM Processes for Growth",
  "Enhance your CRM initiatives with strategic program management to drive customer success and business expansion."
);

export default function Home() {
  const tiles = [
    {
      id: 1,
      img: "/assets/images/consulting/10-1.png",
      title: "End-to-End CRM Implementation",
      desc: "We handle the entire CRM setup, from planning through system launch, ensuring it aligns with your goals for a strong foundation.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/10-2.png",
      title: "Program Design & Strategy",
      desc: "Our tailored CRM strategy aligns with your objectives, mapping workflows, user roles, and system needs for optimal impact.",
    },
    {
      id: 3,
      img: "/assets/images/consulting/10-3.png",
      title: "System Integration & Optimization",
      desc: "We integrate your CRM with existing tools like ERP and marketing platforms, ensuring seamless data flow for a unified business view.",
    },
    {
      id: 4,
      img: "/assets/images/consulting/10-4.png",
      title: "Data Management & Analytics",
      desc: "Our data services improve data quality and provide insights, enhancing decision-making and enabling reliable customer analytics.",
    },
    {
      id: 5,
      img: "/assets/images/consulting/10-5.png",
      title: "Automation & Workflow Management",
      desc: "We automate key tasks like lead assignments and follow-ups, freeing your team to focus on high-value activities that drive growth",
    },
    {
      id: 6,
      img: "/assets/images/consulting/10-6.png",
      title: "Ongoing Support & Training",
      desc: "Comprehensive training and support keep your team adept at using CRM, ensuring they’re equipped to succeed over the long term.",
    },
    {
      id: 7,
      img: "/assets/images/consulting/10-7.png",
      title: "Customer Experience Focus",
      desc: "Our CRM solutions enhance customer experience, enabling personalized interactions that drive loyalty and improve customer service.",
    },
    {
      id: 8,
      img: "/assets/images/consulting/10-8.png",
      title: "Custom Solutions for Your Business",
      desc: "We create unique CRM solutions to fit your operations, from custom workflows to tailored dashboards that improve productivity.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="Strengthen customer engagement with our CRM program excellence"
        img="/assets/images/consulting/hero-10.png"
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
          Our CRM Program Management
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            At Vegacompass, our CRM Program Management services are designed to
            streamline, optimize, and elevate your customer relationship
            management processes. We help you turn data into actionable
            insights, driving better customer experiences, and overall business
            growth. Our holistic approach ensures that your CRM system works for
            you, enhancing engagement and efficiency across every touchpoint.
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
