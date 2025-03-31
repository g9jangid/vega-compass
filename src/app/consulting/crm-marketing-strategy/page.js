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
  "CRM Marketing Strategy | Boost Engagement & Drive Growth",
  "Enhance customer engagement and fuel business growth with a data-driven CRM marketing strategy tailored for success."
);

export default function Home() {
  const tiles = [
    {
      id: 1,
      img: "/assets/images/consulting/marketing-automation.png",
      title: "Marketing Automation Strategy",
      desc: "Our marketing automation solutions ensure that you’re always engaging with your customers at the right time.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/data-driven-marketing.png",
      title: "Data-Driven Marketing Strategies",
      desc: "We develop comprehensive marketing strategies powered by insights from your CRM, helping you deliver personalized campaigns that reach the right people at the right time.",
    },
    {
      id: 3,
      img: "/assets/images/consulting/customer-insights.png",
      title: "Customer Insights & Analytics",
      desc: "CRM analytics services allow you to track customer interactions, measure campaign performance, and identify trends that can be leveraged for future growth.",
    },
    {
      id: 4,
      img: "/assets/images/consulting/sales and marketing alignment.png",
      title: "Sales and Marketing Alignment",
      desc: "Our consultants streamline team handoffs for efficient lead follow-ups and consistent messaging, defining MQL(Marketing Qualified Lead) to SQL (Sales Qualified Lead) processes.",
    },
    {
      id: 5,
      img: "/assets/images/consulting/strategic-marketing.png",
      title: "Strategic Marketing Alignment",
      desc: "Our Strategic Marketing Alignment consultancy boosts efficiency, personalization, insights, stronger relationships, and scalable solutions aligned with your needs.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="CRM marketing solutions to fuel your success"
        img="/assets/images/consulting/crm-marketing.svg"
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
          Our CRM Marketing Strategy
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            In today’s digital-first landscape, creating meaningful and lasting
            customer relationships is paramount to your business success. At
            Vegacompass, we offer a comprehensive Customer Relationship
            Management (CRM) and Marketing Strategy service designed to align
            your technology with your marketing goals, ensuring that every
            customer interaction is a step toward growth.
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
