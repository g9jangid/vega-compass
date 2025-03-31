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
  "CRM Implementation & Integration | Seamless System Optimization",
  "Integrate CRM seamlessly with your existing platforms to optimize workflows and improve business operations."
);

export default function Home() {
  const tiles = [
    {
      id: 1,
      img: "/assets/images/consulting/11-1.png",
      title: "CRM Consultation & Strategy",
      desc: "We begin by assessing your goals to craft a CRM strategy that aligns with your customer journey and processes. Our recommendations cover platforms like Salesforce, HubSpot, or Microsoft Dynamics.",
    },
    {
      id: 2,
      img: "/assets/images/consulting/11-2.png",
      title: "Custom CRM Implementation",
      desc: "We manage your CRM setup end-to-end, from configuring fields and workflows to ensuring your team’s input shapes the system for real-world needs.",
    },
    {
      id: 3,
      img: "/assets/images/consulting/11-3.png",
      title: "System Integration",
      desc: "We seamlessly connect your CRM with ERP, marketing, and customer service tools, unifying business operations for efficient data flow and decision-making.",
    },
    {
      id: 4,
      img: "/assets/images/consulting/11-4.png",
      title: "Data Migration & Cleanup",
      desc: "Our team handles a smooth data migration, cleaning and organizing data to ensure accuracy and usability in your new CRM.",
    },
    {
      id: 5,
      img: "/assets/images/consulting/11-5.png",
      title: "CRM Workflow Automation",
      desc: "We set up automated workflows like lead assignments and follow-up reminders, allowing your team to focus on high-value activities that drive growth.",
    },
    {
      id: 6,
      img: "/assets/images/consulting/11-6.png",
      title: "User Training & Support",
      desc: "We offer comprehensive training for sales, marketing, and service teams, plus ongoing support to keep your CRM running optimally.",
    },
    {
      id: 7,
      img: "/assets/images/consulting/11-7.png",
      title: "Ongoing Maintenance & Optimization",
      desc: "We provide continuous maintenance, monitoring the system and making updates to align with your evolving needs.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroOne
        subhead="CRM CONSULTING"
        title="Effortless CRM integration for greater customer engagement"
        img="/assets/images/consulting/hero-11.png"
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
          Our CRM Implementation & Integration
        </h2>

        <div className="w-full flex flex-wrap justify-center items-center max-w-[700px] text-center">
          <p className="ff-lato text-blackone">
            Implementing a CRM system is a complex process that involves more
            than just software installation—it requires a deep understanding of
            your business goals, customer needs, and the technical landscape.
            With Vegacompass, you get more than a standard setup. Our CRM
            experts work closely with your team to understand your unique
            requirements, configure the CRM accordingly, and integrate it
            seamlessly with existing systems like ERP, marketing platforms,
            e-commerce, and customer service tools. We make sure your CRM
            becomes an essential, value-adding part of your business. 
            <br />
            <br />
            Our CRM Implementation & Integration services ensure that your CRM
            is not only set up correctly but also fully aligned with your
            business processes and other critical tools. With our expertise, you
            can leverage your CRM to optimize workflows, improve customer
            engagement, and drive sustainable growth.
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
