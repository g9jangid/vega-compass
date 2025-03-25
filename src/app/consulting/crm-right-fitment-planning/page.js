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
  "CRM Right Fitment Planning | Tailor CRM to Your Business Needs",
  "Customize your CRM system to match your business requirements, ensuring seamless integration and optimal performance."
);

export default function Home() {
  const tiles = [
    {
      id: 1,
      img: "/assets/images/consulting/6-1.png",
      title: "Comprehensive Business Needs Assessment",
      desc: "We assess your processes, challenges, and goals to identify essential CRM functionalities, ensuring our recommendations meet needs for lead management, marketing, or support.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/6-2.png",
      title: "CRM Platform Evaluation & Recommendation",
      desc: "We evaluate CRM platforms like Salesforce, HubSpot, and Microsoft Dynamics, focusing on features, scalability, and integration, to help you choose the best-fit CRM.",
    },
    {
      id: 3,
      img: "/assets/images/consulting/6-3.png",
      title: "CRM License Comparison",
      desc: "Choosing the right CRM also means selecting the right licenses. We compare costs, support, flexibility, and stability to ensure the license meets your business needs.",
    },
    {
      id: 4,
      img: "/assets/images/consulting/6-4.png",
      title: "Customization & Scalability Planning",
      desc: "We assess your processes, challenges, and goals to identify essential CRM functionalities, ensuring our recommendations meet needs for lead management, marketing, or support.",
    },
    {
      id: 5,
      img: "/assets/images/consulting/6-5.png",
      title: "Integration with Existing Systems",
      desc: "We evaluate CRM platforms like Salesforce, HubSpot, and Microsoft Dynamics, focusing on features, scalability, and integration, to help you choose the best-fit CRM.",
    },
    {
      id: 6,
      img: "/assets/images/consulting/6-6.png",
      title: "Cost-Benefit Analysis & Budget Planning",
      desc: "We conduct a clear cost-benefit analysis, aligning your CRM investment with budget goals to ensure you maximize value while staying within financial limits.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="Our CRM solutions built to fit and scale with your business"
        img="/assets/images/consulting/hero-6.png"
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
          Our CRM Right Fitment Planning
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            Every business is unique, and a one-size-fits-all CRM solution
            rarely meets every need. CRM Right Fitment Planning ensures you
            adopt a CRM platform that is the right size, scope, and
            functionality for your business. We take into account factors such
            as business size, industry requirements, current systems, and
            long-term growth plans to find a CRM that truly aligns with your
            goals. With our expert guidance, you’ll avoid the costly mistakes of
            implementing a misfit CRM and ensure that your solution is scalable,
            efficient, and adaptable.
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
