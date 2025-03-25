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
  "CRM Sales Strategy | Maximize Conversions & Sales Efficiency",
  "Implement a powerful CRM sales strategy to streamline sales processes, improve conversion rates, and drive revenue growth."
);

export default function Home() {
  const tiles = [
    {
      id: 1,
      img: "/assets/images/consulting/sales-strategy-1.png",
      title: "Sales Process Optimization",
      desc: "We help streamline your sales process by embedding CRM best practices, reducing bottlenecks, automating follow-ups, and creating a smoother workflow.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/sales-strategy-2.png",
      title: "CRM Automation for Sales Efficiency",
      desc: "We help automate routine tasks like lead scoring, email follow-ups, and task assignments, allowing your team to focus on closing deals without the drag of administrative work.",
    },
    {
      id: 3,
      img: "/assets/images/consulting/sales-strategy-3.png",
      title: "Lead and Opportunity Management",
      desc: "Our tools and strategies streamline lead segmentation, prospect nurturing, and interaction tracking, ensuring every opportunity is managed effectively and no lead slips through.",
    },
    {
      id: 4,
      img: "/assets/images/consulting/sales-strategy-4.png",
      title: "Forecasting, Revenue Planning & Order Management Integration",
      desc: "We streamline sales forecasting and revenue planning with historical data analysis for accurate growth predictions. Our CRM solutions support CPQ (Configure, Price, Quote) and streamlined order management.",
    },
    {
      id: 5,
      img: "/assets/images/consulting/sales-strategy-5.png",
      title: "Renewals Setup and Planning",
      desc: "Our CRM consultants automate renewals-based forecasting to ensure seamless planning and maximize opportunities for your sales team.",
    },
    {
      id: 6,
      img: "/assets/images/consulting/sales-strategy-6.png",
      title: "Integration with Marketing & Customer Service",
      desc: "We align your CRM systems across departments, creating a unified and consistent experience from lead generation to post-sale support.",
    },
    {
      id: 7,
      img: "/assets/images/consulting/sales-strategy-7.png",
      title: "Sales Analytics & Reporting",
      desc: "Gain deeper insights into conversions, sales cycle performance, and team productivity with our real-time dashboards and comprehensive reporting tools.",
    },
    {
      id: 8,
      img: "/assets/images/consulting/sales-strategy-8.png",
      title: "CRM Implementation for Sales Teams",
      desc: "We deploy tailored CRM platforms, including Salesforce and HubSpot, enabling your team to manage leads efficiently and close deals with confidence.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="Empowering sales success through strategic CRM solutions"
        img="/assets/images/consulting/sales-strategy-hero.png"
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
          Our CRM Sales Strategy
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            In today’s competitive market, managing sales effectively goes
            beyond tracking leads—it’s about building strong, lasting
            relationships with your customers and creating a seamless journey
            from prospect to purchase. At Vegacompass, we provide a robust CRM
            Sales Strategy that aligns your sales process with cutting-edge
            technology, empowering your team to close deals faster and more
            efficiently.
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
