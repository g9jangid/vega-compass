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
import Link from "next/link";

export const metadata = getSEOTags(
  "CRM AI Adoption Strategy | Automate & Personalize Customer Experience",
  "Leverage AI-driven CRM to automate tasks, personalize customer interactions, and enhance business efficiency."
);

export default function Home() {
  const tiles = [
    {
      id: 1,
      img: "/assets/images/consulting/4-1.png",
      title: "AI-Powered CRM Integration",
      desc: "We seamlessly integrate AI into your CRM platforms like Salesforce and HubSpot, delivering real-time insights that drive customer engagement and improve decision-making.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/4-2.png",
      title: "Intelligent Automation for CRM Workflows",
      desc: "Our AI solutions automate critical workflows, reducing manual tasks like lead scoring, email follow-ups, and task assignments to keep your team focused on high-impact actions.",
    },
    {
      id: 3,
      img: "/assets/images/consulting/4-3.png",
      title: "Predictive Analytics and Insights",
      desc: "Our AI-powered predictive analytics let you forecast customer behavior, predict trends, and identify upsell opportunities, helping your team engage proactively with customers",
    },
    {
      id: 4,
      img: "/assets/images/consulting/4-4.png",
      title: "AI-Driven Sales Strategy",
      desc: "With AI embedded in your CRM, your sales team accesses real-time data and predictive insights, allowing them to prioritize leads, close deals faster, and build strong customer relationships.",
    },
    {
      id: 5,
      img: "/assets/images/consulting/4-5.png",
      title: "AI Chatbots and Virtual Assistants",
      desc: "Our AI-powered chatbots and virtual assistants provide instant support for routine inquiries and escalate complex issues, ensuring an efficient customer service experience.",
    },
    {
      id: 6,
      img: "/assets/images/consulting/4-6.png",
      title: "Customer Sentiment Analysis",
      desc: "We use AI and natural language processing (NLP) to analyze customer interactions across email, social media, and tickets, helping you respond more effectively and improve satisfaction.",
    },
    {
      id: 7,
      img: "/assets/images/consulting/4-7.png",
      title: "Data-Driven Personalization",
      desc: "AI lets us analyze extensive customer data, delivering personalized recommendations, targeted campaigns, and tailored service to enhance the customer experience at scale.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="Transform your CRM with AI to drive growth and efficiency"
        img="/assets/images/consulting/hero-4.png"
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
          Our CRM AI-Adoption Strategy
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            The future of customer relationship management is here, and it’s
            powered by Artificial Intelligence (AI). At Vegacompass, we offer a
            cutting-edge CRM AI Adoption Strategy designed to revolutionise how
            your business interacts with customers. By integrating AI into your
            CRM system, we empower you to automate tasks, predict customer
            behaviours, and provide personalised experiences at scale—all while
            improving efficiency and driving growth.
          </p>
          <p className="text-[#376CF5] ff-lato mb-3 mt-6 italic">
            Download our CRM - AI adoption checklist to validate your Org
            readiness for AI strategy.
          </p>
          <div className="w-full">
            <Link
              href="/case-studies"
              className="text-base capitalize inline-block ff-lato ease-in-up rounded-md border border-red hover:bg-red py-2 px-8 text-red hover:text-white transition duration-300"
            >
              Download Now
            </Link>
          </div>
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
