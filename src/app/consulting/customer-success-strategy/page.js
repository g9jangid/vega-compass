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
  "CRM Customer Service Strategy | Optimize Support & Experience",
  "Elevate customer service with CRM solutions that streamline operations, improve response times, and enhance customer satisfaction."
);

export default function Home() {
  const tiles = [
    {
      id: 1,
      img: "/assets/images/consulting/14-1.png",
      title: "Customer Success Strategy Design",
      desc: "We partner with your team to craft a customer success roadmap tailored to your business and clients, focusing on segmentation, communication plans, and key success metrics.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/14-2.png",
      title: "CRM Integration for Customer Success",
      desc: "Our CRM integration consolidates all customer data, empowering your customer success managers to deliver personalized, proactive support.",
    },
    {
      id: 3,
      img: "/assets/images/consulting/14-3.png",
      title: "Customer Health Scoring",
      desc: "Using CRM analytics, we help set up health scores based on metrics like engagement and satisfaction, enabling proactive support for high-risk customers.",
    },
    {
      id: 4,
      img: "/assets/images/consulting/14-4.png",
      title: "Onboarding & Product Adoption",
      desc: "We automate CRM-driven onboarding, guiding customers through each product feature to ensure quick, effective adoption and value realization..",
    },
    {
      id: 5,
      img: "/assets/images/consulting/14-5.png",
      title: "Ongoing Customer Engagement & Support",
      desc: "Build strong relationships with CRM workflows for regular check-ins, usage reviews, and proactive outreach, ensuring long-term loyalty.",
    },
    {
      id: 6,
      img: "/assets/images/consulting/14-6.png",
      title: "Customer Feedback & Improvement Loop",
      desc: "Our CRM integrations include feedback tools, allowing you to gather insights to improve products, services, and support.",
    },
    {
      id: 7,
      img: "/assets/images/consulting/14-7.png",
      title: "Renewals, Upselling, & Expansion Opportunities",
      desc: "We identify growth opportunities through CRM insights on renewals and upsells, engaging customers at the right time with tailored offers.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="Customer success strategy that drives growth"
        img="/assets/images/consulting/hero-14.png"
        bg="#FFF7F0"
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
          Our Customer Success Strategy
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            Customer success goes beyond traditional customer support—it&apos;s
            about guiding your customers to achieve their goals with your
            products or services. A dedicated focus on customer success helps
            reduce churn, boost customer satisfaction, and create advocates for
            your brand. Our CRM Customer Success strategy services helps your
            existing processes to give you a holistic view of your customers,
            enabling you to take proactive steps that keep them engaged,
            satisfied, and loyal.
            <br />
            By leveraging powerful CRM tools and strategies, we enable your
            business to anticipate customer needs, resolve issues quickly, and
            provide value at every stage of the customer journey.
          </p>
        </div>
      </section>

      <section className="container mx-auto flex justify-center flex-col items-center mt-24">
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
