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
  "Customer Success Strategy | Improve Retention & Satisfaction",
  "Drive long-term customer success by proactively addressing customer needs and reducing churn with effective CRM strategies."
);

export default function Home() {
  const tiles = [
    {
      id: 1,
      img: "/assets/images/consulting/3-1.png",
      title: "Service Desk & Ticketing Automation",
      desc: "We streamline customer service with CRM ticketing automation, assigning tickets, setting up escalations, and automating follow-ups to address queries fully.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/3-2.png",
      title: "Knowledge Management Systems",
      desc: "Our CRM provides service agents with a comprehensive knowledge base, enabling faster access to solutions, improved first-contact resolutions, and reduced response times",
    },
    {
      id: 3,
      img: "/assets/images/consulting/3-3.png",
      title: "Customer Self-Service Portals",
      desc: "We enable self-service through CRM portals, allowing customers to resolve issues independently with instant access to FAQs, guides, and manuals.",
    },
    {
      id: 4,
      img: "/assets/images/consulting/3-4.png",
      title: "Multichannel Support Integration",
      desc: "Our CRM connects all support channels—email, chat, social media, and phone—creating a unified view for consistent customer support across platforms..",
    },
    {
      id: 5,
      img: "/assets/images/consulting/3-5.png",
      title: "Performance Analytics & Reporting",
      desc: "We provide real-time dashboards to track performance indicators like response times, CSAT scores, and ticket resolution, enabling data-driven service improvements.",
    },
    {
      id: 6,
      img: "/assets/images/consulting/3-6.png",
      title: "Customer Feedback & Surveys",
      desc: "Our CRM captures customer feedback through automated surveys, offering insights into team performance and growth areas to meet customer expectations.",
    },
    {
      id: 7,
      img: "/assets/images/consulting/3-7.png",
      title: "CRM Implementation for Customer Service",
      desc: "We implement CRM platforms like Salesforce Service Cloud, ServiceNow Service Hub and Microsoft Dynamics Customer Service customized for your service needs, providing teams efficient resolution.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="Deliver high-quality customer services with our CRM tools"
        img="/assets/images/consulting/hero-3.png"
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
          Our CRM Customer Service Strategy
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            In today’s fast-paced, customer-centric world, excellent service is
            no longer optional—it&apos;s essential. At Vegacompass, we help you
            deliver exceptional customer service and support by leveraging
            powerful CRM solutions that streamline operations, manage cases &
            incidents, enhance communication, and improve response times. Our
            specialised experience in CRM Customer Service and Support Strategy
            helps customers ensures that every customer interaction is handled
            efficiently, boosting satisfaction and loyalty.
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
